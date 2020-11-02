import { NotificationService } from './../base/service/notification.service';
import { ModalService } from './../base/service/modal.service';
import { TaskService } from './task.service';
import { Component, OnInit } from '@angular/core';
import { TaskItem } from './task-item.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks: TaskItem[] = [];
  count: number = 0;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  columns = [
    { columnDef: 'description', header : 'Description', type: 'text' },
    { columnDef: 'completed', header : 'Completed', type: 'text' },
    { columnDef: 'createdAt', header : 'Created At', type: 'text' },
    { columnDef: 'updatedAt', header : 'Updated At', type: 'text' },
    { columnDef: 'edit', header : 'Edit', type: 'clickableIcon', icon: 'create', 
      showModal: (row) =>  this.editTask(row)
    },
    { columnDef: 'delete', header : 'Delete', type: 'clickableIcon', icon: 'delete_forever',
      showModal: (row) =>  this.deleteTask(row)
    },
  ];
  displayedColumns: string[] = [...this.columns.map(x => x.columnDef)];
  taskFilter = 'all';

  constructor(
    private taskSerive: TaskService,
    private modalService: ModalService,
    private notif: NotificationService) { }

  ngOnInit(): void {
    this.loadALlTask();
  }

  loadALlTask() {
    this.taskSerive.getAllTask().subscribe(
      res => {
        console.log(res);
        this.tasks = res['data'];
        this.count = this.tasks.length;
        this.dataSource = new MatTableDataSource(this.tasks);
      }
    );
  }

  loadCompletedTask() {
    this.taskSerive.getCompletedTask().subscribe(
      res => {
        console.log(res);
        this.tasks = res['data'];
        this.count = this.tasks.length;
        this.dataSource = new MatTableDataSource(this.tasks);
      }
    );
  }

  addTaskClicked() {
    this.modalService.launchInputModal('New Task', 'Please add description about your new task').subscribe(
      res => {
        console.log(res);
        this.notif.notif("Processing new task...")
        if(res) {
          this.taskSerive.addNewTask({ description: res}).subscribe(
            res => {
              console.log(res);
              this.notif.notif("New task added")
              this.loadALlTask();
            },
            err => this.notif.notifErr(err)
          );
        }
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editTask(row: TaskItem) {
    if(!row.completed) {
      this.markTaskAsCompleted(row);
    } else {
      this.markTaskAsIncompleted(row);
    }
  }

  markTaskAsCompleted(row: TaskItem) {
    this.modalService.launchConfirmModal('Edit Task', `Mark Task: ${row.description} as Completed?`)
      .subscribe(res => {
        if(res) {
          this.notif.notif("Updating task...")
          this.taskSerive.updateTask(row, {"completed": true}).subscribe(
            res =>  {
              this.notif.notif("Task Updated");
              this.loadALlTask();
            },
            err => {
              err.error = err.message;
              this.notif.notifErr(err)
            }
          )
        }
      })
  }

  markTaskAsIncompleted(row: TaskItem) {
    this.modalService.launchConfirmModal('Edit Task', `Mark Task: ${row.description} as Incompleted?`)
      .subscribe(res => {
        if(res) {
          this.notif.notif("Updating task...")
          this.taskSerive.updateTask(row, {"completed": false}).subscribe(
            res =>  {
              this.notif.notif("Task Updated");
              this.loadALlTask();
            },
            err => {
              err.error = err.message;
              this.notif.notifErr(err)
            }
          )
        }
      })
  }

  deleteTask(row: TaskItem) {
    this.modalService.launchConfirmModal('Delete Task', `Delete Task: ${row.description}?`)
      .subscribe(res => {
        if(res) {
          this.notif.notif("Deleting task...")
          this.taskSerive.deleteTask(row).subscribe(
            res =>  {
              this.notif.notif("Task deleted");
              this.loadALlTask();
            },
            err => {
              err.error = err.message;
              this.notif.notifErr(err)
            }
          )
        }
      })
  }

  taskFilterChanged($event: MatRadioChange) {
    console.log($event);
    if($event.value == 'completed') {
      this.loadCompletedTask();
    } else {
      this.loadALlTask();
    }
  }

  taskClicked(row) {
    console.log('taskClicked: ', row);
  }

  clickColumn($event, column, row) {
    $event.stopPropagation();
    column.showModal(row);
  }
}
