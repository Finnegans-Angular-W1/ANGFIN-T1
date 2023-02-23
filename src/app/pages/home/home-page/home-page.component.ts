import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Transaction } from 'src/app/core/models/transactions';
import { User } from 'src/app/core/models/user';
import { getData } from 'src/app/core/state/actions/data.action';
import { setLoadingSpinner } from 'src/app/core/state/actions/spinner.actions';
import { AppState } from 'src/app/core/state/app.state';
import { selectUser } from 'src/app/core/state/selector/Auth.selector';
import { selectDataImportant } from 'src/app/core/state/selector/data.selector';
import { getLoading } from 'src/app/core/state/selector/spinner.selector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  url = 'https://mercado-pago-alkemi.vercel.app/checkout';
  user!: User | null;

  money: string = '0';
  transactions: Transaction[] = [];

  constructor(private store: Store<AppState>) {}

  test() {
    console.log('testeando');
    this.store.dispatch(setLoadingSpinner({status:true}))

    this.store.select(getLoading).subscribe((res)=>{
      console.log(res)
    })


  }

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(user => (this.user = user));
    this.store.select(selectDataImportant).subscribe(res => {
      this.transactions = res.transactions;
      this.money = res.money;
    });
  }
}
