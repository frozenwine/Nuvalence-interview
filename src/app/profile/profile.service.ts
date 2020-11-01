import { User } from './../base/model/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  LOGGED_IN_USER_PROFILE_URL = 'user/me';
  UPLOAD_IMAGE_URL = 'user/me/avatar';

  constructor(private http: HttpClient) { }

  getUserProfile() {
    return this.http.get<User>(this.LOGGED_IN_USER_PROFILE_URL);
  }

  updateUserProfile(data) {
    return this.http.put(this.LOGGED_IN_USER_PROFILE_URL, data);
  }

  getUserImage(userId) {
    return this.http.get(`user/${userId}/avatar`);
  }

  uploadImage(formData: FormData) {
    return this.http.post(this.UPLOAD_IMAGE_URL, formData);
  }
}
