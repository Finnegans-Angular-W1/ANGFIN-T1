import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpService } from '../../core/services/http.service'


@Component({
  selector: 'app-list-ing-egr',
  templateUrl: './list-ing-egr.component.html',
  styleUrls: ['./list-ing-egr.component.scss']
})
export class ListIngEgrComponent implements OnInit {



  transactions!: any[];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.get<any>('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions', true)
      .subscribe(data => {
        this.transactions = data.data
          .sort((a:any, b:any) => new Date(a.date).getTime() - new Date(b.date).getTime())
          .slice(0, 4);
      });
    }
  }




