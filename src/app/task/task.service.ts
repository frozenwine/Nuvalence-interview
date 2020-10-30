import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskItem } from './task-item.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  TASK_URL = 'task';

  constructor(private httpClient: HttpClient) { }

  getAllTask() {
    return this.httpClient.get(this.TASK_URL);
  }

  addNewTask(description) {
    return this.httpClient.post(this.TASK_URL, description);
  }

  updateTask(taskItem: TaskItem, data) {
    return this.httpClient.put(`${this.TASK_URL}/${taskItem._id}`, data);
  }

  deleteTask(taskItem: TaskItem) {
    return this.httpClient.delete(`${this.TASK_URL}/${taskItem._id}`);
  }
}
