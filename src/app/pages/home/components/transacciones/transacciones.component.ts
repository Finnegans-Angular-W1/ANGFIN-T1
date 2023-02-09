import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/core/models/transactions';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.scss'],
})
export class TransaccionesComponent implements OnInit {

  @Input() transactions!: Transaction[];
  constructor() {}

  // TODO: Elminar mook data
  ngOnInit(): void {
    this.transactions = [
      {
        amount: 500,
        concept: 'Pago de honorarios',
        date: '2022-10-26 15:00:00',
        type: "topup",
        accountId: 1,
        userId: 4,
        to_account_id: 5,
      },
      {
        amount: 200,
        concept: 'Pizzeria',
        date: '2022-10-26 15:00:00',
        type: 'payment',
        accountId: 1,
        userId: 4,
        to_account_id: 5,
      },
      {
        amount: 800,
        concept: 'Pago de medicamentos',
        date: '2022-10-26 15:00:00',
        type: 'payment',
        accountId: 1,
        userId: 4,
        to_account_id: 5,
      },
    ];
  }
}
