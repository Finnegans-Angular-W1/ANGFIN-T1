import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ToastService } from 'angular-toastify';
import { AccountsService } from 'src/app/core/services/accounts.service';
import { TransactionsService } from 'src/app/core/services/transactions.service';
import { getData } from 'src/app/core/state/actions/data.action';
import { AppState } from 'src/app/core/state/app.state';
import { selectDataImportant } from 'src/app/core/state/selector/data.selector';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  expensesTitle:string = 'Gastos'; //titulo que se inyecta a rtitle por medio de un @Input
  accountId!:number;

  constructor(private acountSvc:AccountsService,
              private store:Store<AppState>,
              private alert:ToastService) { }

  ngOnInit(): void {
    this.store.select(selectDataImportant).subscribe(res =>{
      this.accountId = res.account_id;
    })
  }

  onSubmit(event: any){
    const body:any = {
      amount:event.amount > 0? event.amount*(-1): event.amount,
      concept:event.concept,
      type:'payment'
    }
    console.log(body)
    this.acountSvc.createDeposit(this.accountId, body).subscribe({
      next:res =>{this.alert.success('La operacion ha sido exitosa!')},
      error: err =>{this.alert.error('Ha ha salido mal!'); console.log(err)},
      complete: () => {this.store.dispatch(getData())}
    })
  };
}
