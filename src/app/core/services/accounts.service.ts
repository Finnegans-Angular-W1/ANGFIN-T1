import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private http: HttpService) {}

  createAccount(body: any) {
    return this.http.post('/accounts', body);
  }

  createDeposit(
    id: number,
    body: { type: "topup" | "payment", concept: string, amount:number }
  ) {
    return this.http.post(`/accounts/${id}`, body, true);
  }

  getAcconts() {
    return this.http.get<Account[]>(
      'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/me',
      true
    );
  }
}
