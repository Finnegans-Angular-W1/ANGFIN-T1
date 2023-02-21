import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpService) { }

  createRole(body:any) {
    return this.http.post('/roles', body);
  }

  resetPassword(userId:number, body:any) {
    return this.http.patch(`${environment.Api}/users/resetPassword/${userId}`, body);
  };

}
