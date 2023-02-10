import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpService } from '../../core/services/http.service'

@Component({
  selector: 'app-list-ingresos',
  templateUrl: './list-ingresos.component.html',
  styleUrls: ['./list-ingresos.component.scss']
})
export class ListIngresosComponent implements OnInit {

  ingresos!: any[];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.get<any>('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions', true)
      .subscribe(data => {
        const transactions = data.data;
        this.ingresos = transactions.filter((transaction: any) => transaction.type === 'topup');
        this.ingresos.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
      });
  }
}
  