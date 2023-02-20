import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/core/services/accounts.service';
import { TransactionsService } from 'src/app/core/services/transactions.service';

@Component({
  selector: 'app-gastos-edit',
  templateUrl: './gastos-edit.component.html',
  styleUrls: ['./gastos-edit.component.scss'],
})
export class GastosEditComponent implements OnInit {
  ngOnInit(): void {}

  expensesTitle: string = 'Gastos'; //titulo que se inyecta a rtitle por medio de un @Input
  data!: any; //REVISAR ESTA VARIABLE

  constructor(
    private acountSvc: AccountsService,
    private transSvc: TransactionsService
  ) {}

  onSubmit(event: any) {
    this.data = event;
    console.log(this.data); //TODO: ELIMINAR cuando ya no se necesite
    this.transSvc.createTransaction(this.data).subscribe(res => {
      console.log(res);
    });
  }
}
