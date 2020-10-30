import { LoginService } from './../service/login.service';
import { NavItem } from './../model/nav-item.model';
import { ModalService } from './../service/modal.service';
import { UserSessionService } from './../service/user-session.service';
import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { ModalModel } from '../service/modal.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NotificationService } from '../service/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'base-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  mobileQuery: MediaQueryList;

  fillerNav: NavItem[] = [];
  bottomNav: NavItem[] = []; 

  constructor(
    private userSessionService: UserSessionService,
    private bnIdle: BnNgIdleService,
    private dialog: MatDialog,
    private modalService: ModalService,
    private loginSerice: LoginService,
    private _snackBar: MatSnackBar,
    private notif: NotificationService,
    private router: Router
  ) {
    this.modalService.mainComponent = this;
    this.loginSerice.mainComponent = this;
    this.notif.mainComponent = this;
  }

  ngOnInit() {
    this.userSessionService.startWatchingIdle(this.bnIdle).subscribe(
      (isTimedOut: boolean) => {
        if (isTimedOut) {
          console.log('session expired');
          this.modalService.launchConfirmModal('Warning', 'Logging out...', true);
        }
      }
    );;
  }

  ngOnDestroy(): void {
  }

  launchModal(modalModel: ModalModel) : MatDialogRef<any> {
    return this.dialog.open(modalModel.modalComponent, {
      autoFocus: false,
      width: modalModel.width,
      maxHeight: modalModel.maxHeight,
      data: modalModel.data
    })
  }

  initNavItems() {
    this.fillerNav = [
      { label: 'Home', path: 'home'}
    ];
    this.bottomNav = [
      { label: 'Delete User', id: 'delete' },
      { label: 'Log Out', id: 'logout' }
    ]; 
  }

  clearNavItems() {
    this.fillerNav = [];
    this.bottomNav = []; 
  }

  navItemClicked(nav: NavItem) {
    if(nav.id == 'logout') {
      this.loginSerice.logout().subscribe(
        res =>{
          console.log(res);
          if(res) {
            this.loginSerice.cleanAuthData();
            this.showMessage('You have logged out')
          }
        },
        err => this.showMessage(err)
      );
    } else if(nav.id == 'delete') {
      this.modalService.launchConfirmModal('Warning', 'Please confirm to terminate your service!').subscribe(
        res => {
          if(res) {
            this.loginSerice.deleteUser().subscribe(
              res =>{
                console.log(res);
                if(res) {
                  this.loginSerice.cleanAuthData();
                  this.showMessage('Your service has been terminated')
                }
              },
              err => this.showMessage(err)
            );
          }
        }
      )
    } else {
      this.router.navigate([nav.path]);
    }
  }

  showMessage(message: string) {
    this._snackBar.open(message, '', {
      duration: 5000,
    });
  }

}
