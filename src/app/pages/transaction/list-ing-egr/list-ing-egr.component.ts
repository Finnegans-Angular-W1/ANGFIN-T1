import { Component, OnInit } from '@angular/core';
import {
  Transaction,
  TransactionResponse,
} from 'src/app/core/models/transactions';
import { TransactionsService } from 'src/app/core/services/transactions.service';

const filterType ={
  payment: "payment",
  topup: "topup",
  all:"all"
} as const
  

@Component({
  selector: 'app-list-ing-egr',
  templateUrl: './list-ing-egr.component.html',
  styleUrls: ['./list-ing-egr.component.scss'],
})
export class ListIngEgrComponent implements OnInit {
  title: string = 'Movimientos';
  currentPage: number = 1;

  transactionsData!: TransactionResponse;
  transactions!: Transaction[] | null;
  filter: any = filterType.all;

  constructor(
    private transactionsSvc: TransactionsService,
  ) {}

  ngOnInit() {
    this.transactionsSvc.getTransactions().subscribe(res => {
      this.transactionsData = res;
      this.transactions = res.data;
    });
  }

  toFilter(transactions: Transaction[]) {
    this.transactions = transactions.filter(t => {
      if (this.filter === filterType.payment) return t.type === filterType.payment;
      if (this.filter === filterType.topup) return t.type === filterType.topup;
      return t;
    });
  }

  nextPage() {
    if (this.transactionsData.nextPage) {
      this.transactionsSvc
        .getTransactionsByPage(this.currentPage + 1)
        .subscribe(res => {
          this.transactionsData = res;
          this.toFilter(res.data);
          this.currentPage++;
        });
    }
  }

  prevPage() {
    if (this.transactionsData.previousPage) {
      this.transactionsSvc
        .getTransactionsByPage(this.currentPage - 1)
        .subscribe(res => {
          this.transactionsData = res;
          this.toFilter(res.data);
          this.currentPage--;
        });
    }
  }

}
