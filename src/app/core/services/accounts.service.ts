import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpService) { }

  createAccount(body:any) {
    return this.http.post('/accounts', body);
  }

  createDeposit(id:number, body:any) {
    return this.http.post(`/accounts/${id}`, body);
  }
}
