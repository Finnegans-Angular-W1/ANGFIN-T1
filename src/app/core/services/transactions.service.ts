import { Injectable } from '@angular/core';
import { Transaction } from '../models/transactions';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpService) { }

  createTransaction(body:any) {
    return this.http.post('/transactions', body);
  }
  updateTransaction( body: Transaction) {
    return this.http.put(`/transactions/${body.id}`, body);
  }
}
