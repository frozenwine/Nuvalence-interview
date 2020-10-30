import { InputModalComponent } from './../modal/input-modal/input-modal.component';
import { ConfirmModel } from './../model/confirm.model';
import { MainComponent } from './../main/main.component';
import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmModalComponent } from '../modal/confirm-modal/confirm-modal.component';
import { Observable } from 'rxjs';
import { InputModel } from '../model/input.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  mainComponent: MainComponent;
  currentDialogRef: MatDialogRef<any>;

  constructor() { }

  launchModel(modalType: ModalType, data): MatDialogRef<any> {
    const modalComponent = this.getModalComponent(modalType);
    const modalModel = new ModalModel(modalComponent, data);
    this.currentDialogRef = this.mainComponent.launchModal(modalModel);
    return this.currentDialogRef;
  }

  getModalComponent(modalType: ModalType) {
    switch(modalType) {
      case ModalType.CONFIRM:
        return ConfirmModalComponent
      case ModalType.INPUT:
        return InputModalComponent
    }
  }

  launchConfirmModal(title: string, message: string, hideCancel?: boolean) : Observable<any>{
    const newConfirmModel = new ConfirmModel();
    newConfirmModel.title = title;
    newConfirmModel.message = message;
    if(hideCancel) {
      newConfirmModel.displayCancel = false;
    }
    return this.launchModel(ModalType.CONFIRM, newConfirmModel).afterClosed();
  }

  launchInputModal(title: string, message: string, hideCancel?: boolean) : Observable<any>{
    const newInputModel = new InputModel();
    newInputModel.title = title;
    newInputModel.message = message;
    if(hideCancel) {
      newInputModel.displayCancel = false;
    }
    return this.launchModel(ModalType.INPUT, newInputModel).afterClosed();
  }
}

export enum ModalType {
  CONFIRM = 'CONFIRM',
  INPUT = 'INPUT'
}

export class ModalModel {
  width: string = '45vw';
  maxHeight: string = '50vh';

  constructor(public modalComponent: any, public data: any){}
}
