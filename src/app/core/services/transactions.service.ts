import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpService) { }

  createTransaction(body:any) {
    return this.http.post('/transactions', body);
  }
}
