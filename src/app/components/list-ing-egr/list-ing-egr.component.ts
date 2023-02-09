import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../../core/services/http.service'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Transaccion {
  amount: number;
  concept: string;
  date: string;
  type: string;
  accountId: number;
  userId: number;
  to_account_id: number;
}

const token = localStorage.getItem('auth-token');
console.log(token);


@Component({
  selector: 'app-list-ing-egr',
  templateUrl: './list-ing-egr.component.html',
  styleUrls: ['./list-ing-egr.component.scss']
})
export class ListIngEgrComponent implements OnInit {
  

  transaccions: Transaccion[] | undefined;

  private _headers = new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` 
  });

  

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void  {

    this.httpClient.get<Transaccion[]>(
      'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions',
      { headers: this._headers }
    ).subscribe(data => {
      this.transaccions = data;
      this.transaccions.sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1);
    });
  }

}


