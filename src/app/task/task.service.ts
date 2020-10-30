import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  GET_ALL_TASK_URL = 'task';

  constructor(private httpClient: HttpClient) { }

  getAllTask() {
    return this.httpClient.get(this.GET_ALL_TASK_URL);
  }

  addNewTask(description) {
    return this.httpClient.post(this.GET_ALL_TASK_URL, description);
  }
}
