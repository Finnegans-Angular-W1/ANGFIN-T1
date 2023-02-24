import { Injectable } from '@angular/core';
import { Transaction, TransactionResponse } from '../models/transactions';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpService) {}

  createTransaction(body: any) {
    return this.http.post('/transactions', body);
  }
  updateTransaction(body: Transaction) {
    return this.http.put(`/transactions/${body.id}`, body);
  }

  getTransactions() {
    return this.http.get<TransactionResponse>(
      'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions',
      true
    );
  }

  getTransactionsByPage(page:number) {
    return this.http.get<TransactionResponse>(
      `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions/?page=${page}`,
      true
    );
  }
}
