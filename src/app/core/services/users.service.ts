import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpService) { }

  createRole(body:any) {
    return this.http.post('/roles', body);
  }

  resetPassword(userId:number, body:any) {
    return this.http.patch(`/users/resetPassword/${userId}`, body);
  };

}
