import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://localhost:7777/api";
  constructor(private http : HttpClient) { }

  updateUserService(updateUser: User):Observable <User>{
    return this.http.put<User>(this.baseUrl+"/users/"+updateUser.user_id,updateUser);
   }
}
