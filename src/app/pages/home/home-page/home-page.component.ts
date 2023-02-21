import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Account } from 'src/app/core/models/account';
import { Transaction, TransactionResponse, TransactionType } from 'src/app/core/models/transactions';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpService } from 'src/app/core/services/http.service';
import { getData } from 'src/app/core/state/actions/data.action';
import { AppState } from 'src/app/core/state/app.state';
import { selectUser } from 'src/app/core/state/selector/Auth.selector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  url = 'https://mercado-pago-alkemi.vercel.app/checkout';
  user!:User|null

  account: Account|null= null
  transactions: Transaction[] = []


  constructor(
    private store: Store<AppState>,
    private http: HttpService) { }

  test(){
    console.log("testeando")
    this.store.dispatch(getData())
  }



  ngOnInit(): void {
    this.store.select(selectUser).subscribe(user => this.user=user)

    this.http.get<Account[]>(
      'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/me',
      true
    ).subscribe((res)=>{
      this.account = res[0]
    })


    this.http.get<TransactionResponse>(
      'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions',
      true
    ).subscribe(res=>{
      this.transactions = res.data
    });

  }

}
