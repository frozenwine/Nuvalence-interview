import { NotificationService } from './../base/service/notification.service';
import { ModalService } from './../base/service/modal.service';
import { TaskService } from './task.service';
import { Component, OnInit } from '@angular/core';
import { TaskItem } from './task-item.model';
import { MatTableDataSource } from '@angular/material/table';

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
    { columnDef: 'description', header : 'Description' },
    { columnDef: 'completed', header : 'Completed' },
    { columnDef: 'createdAt', header : 'Created At' },
    { columnDef: 'updatedAt', header : 'Updated At' },
  ];
  displayedColumns: string[] = [...this.columns.map(x => x.columnDef)];

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

}
