import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  moves = [
    {
      type: 'Ingreso',
      amount: 10000,
      date: '2022-01-01',
      description: 'Trabajo'
    },
    {
      type: 'Egreso',
      amount: 5000,
      date: '2022-01-02',
      description: 'Compras en el supermercado'
    },
    {
      type: 'Ingreso',
      amount: 2000,
      date: '2022-01-03',
      description: 'Reembolso de gastos'
    },
    {
      type: 'Egreso',
      amount: 5000,
      date: '2022-01-04',
      description: 'nafta'
    }
  ];

  latestMoves = this.moves.slice(0, 3);

  ingresos = this.moves
    .filter(move => move.type === 'Ingreso')
    .reduce((acc, move) => acc + move.amount, 0);

  egresos = this.moves
    .filter(move => move.type === 'Egreso')
    .reduce((acc, move) => acc + move.amount, 0);

  balance = this.ingresos - this.egresos;

  constructor() { }

  ngOnInit(): void {
  }

}
