import { LoginService } from './../service/login.service';
import { NavItem } from './../model/nav-item.model';
import { ModalService } from './../service/modal.service';
import { UserSessionService } from './../service/user-session.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BnNgIdleService } from 'bn-ng-idle';
import { ModalModel } from '../service/modal.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

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
    private loginSerice: LoginService
  ) {
    this.modalService.mainComponent = this;
    this.loginSerice.mainComponent = this;
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
      { label: 'Delete User', id: 'Delete' },
      { label: 'Log Out', id: 'logout' }
    ]; 
  }

  clearNavItems() {
    this.fillerNav = [];
    this.bottomNav = []; 
  }

  navItemClicked(nav: NavItem) {
    if(nav.id == 'logout') {
      this.loginSerice.logout();
    }
  }

}
