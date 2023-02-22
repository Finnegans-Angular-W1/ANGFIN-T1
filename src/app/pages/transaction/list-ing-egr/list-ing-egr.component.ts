import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpService } from '../../../core/services/http.service'
import { ListIngresosComponent } from '../list-ingresos/list-ingresos.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list-ing-egr',
  templateUrl: './list-ing-egr.component.html',
  styleUrls: ['./list-ing-egr.component.scss']
})
export class ListIngEgrComponent implements OnInit {
  [x: string]: any;



  transactions!: any[];
  //totIngr = this['ListIngresosComponent'].getTotal();
  //totEgr = this['ListEgrComponent'].getTotal();
  balance = 0;
  

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.httpService.get<any>('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions', true)
      .subscribe(data => {
        this.transactions = data.data
          .sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime())
          ;
          //this.balance = this.totIngr-this.totEgr;

      });
    }
    goToIngresos() {
      this.router.navigate(['transactions/ingresos']);
    }
    
    goToGastos() {
      this.router.navigate(['transactions/egresos']);
    }
  }




