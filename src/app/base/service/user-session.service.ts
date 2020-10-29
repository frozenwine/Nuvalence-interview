import { Injectable } from '@angular/core';
import { Observable, merge, fromEvent, from } from 'rxjs';
import { BnNgIdleService } from 'bn-ng-idle';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  private idleTime = 600;
  private userActivity$: Observable<any>;
  private timeOUt = 60; //timeout after idle time
  private idle$: Observable<any>;
  bnIdle: BnNgIdleService

  constructor() { 

  }

  startWatchingIdle(bnIdle: BnNgIdleService) : Observable<any>{
    this.bnIdle = bnIdle;
    console.log('bnIdle: ', this.bnIdle)
    return this.bnIdle.startWatching(this.idleTime);
  }
}
