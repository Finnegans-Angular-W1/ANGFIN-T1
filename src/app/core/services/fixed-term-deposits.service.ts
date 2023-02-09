import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FixedTermDepositsService {

  constructor(private http: HttpService) { }

  createFixedTermDeposit(body:any) {
    return this.http.post('/fixeddeposits', body);
  }
}
