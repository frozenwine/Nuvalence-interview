import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  mainComponent: MainComponent;

  constructor() { }

  notif(message) {
    this.mainComponent.showMessage(message);
  }

  notifErr(err: HttpErrorResponse) {
    console.log(err)
    this.mainComponent.showMessage(err.error);
  }
}
