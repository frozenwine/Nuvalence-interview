import { NotificationService } from './../base/service/notification.service';
import { ProfileService } from './profile.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { RegExValidation } from '../base/validation/regex.validator';
import { REG_EX_CONSTANTS } from '../base/validation/regex';
import { concatMap } from 'rxjs/operators';
import { User } from '../base/model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  ageController = new FormControl(null, [Validators.required, RegExValidation(REG_EX_CONSTANTS.INTEGER)]);
  user: User;
  imageUrl = null;

  constructor(
    private profileService: ProfileService, 
    private notif: NotificationService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.profileService.getUserProfile().subscribe(user => {
        console.log(user);
        if(user) {
          this.user = user;
          let age = user.age;
          this.ageController.setValue(age);
        }
        this.loadImage();

      });
  }

  loadImage() {
    if(this.user && this.user._id) {
      this.profileService.getUserImage(this.user._id).subscribe(
        res => {
          console.log(res);
          this.imageUrl = res['url'];
        },
        err => {
          this.imageUrl = err['url'];
          this.cdRef.detectChanges();
        }
      )
    }
  }

  updateClicked() {
    const data = { age: this.ageController.value };
    this.notif.notif('Update your profile...');
    this.profileService.updateUserProfile(data).subscribe(res => {
      console.log(res);
      if(res) {
        this.notif.notif('Your profile updated.');
        let age = res['data']['age'];
        this.ageController.setValue(age);
      }
    })
  }

  browseButtonClicked() {
    this.fileInput.nativeElement.click();
  }

  browseFile($event) {
    const file: File = $event?.target?.files[0];
    console.log(file);
    if(file) {
      const formData = new FormData();
      formData.append('avatar', file);
      this.notif.notif('Uploading image...');
      this.imageUrl = null;
      this.profileService.uploadImage(formData).subscribe(
        res => {
          this.notif.notif('Image Uploaded...');
          this.loadImage();
        }
      )
    }
  }

}
