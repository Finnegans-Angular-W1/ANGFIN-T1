import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/core/services/accounts.service';
import { TransactionsService } from 'src/app/core/services/transactions.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  expensesTitle:string = 'Gastos'; //titulo que se inyecta a rtitle por medio de un @Input
  data!:any;                       //REVISAR ESTA VARIABLE

  //Se inyectaron los dos service por dudas con respecto a que endpoint enviar la info de este
  //componente. ELEGIR UN SOLO SERVICE. REVISAR SI ES NECESARIO CREAR UN SERVICE NUEVO.
  constructor(private acountSvc:AccountsService, private transSvc:TransactionsService) { }

  ngOnInit(): void {
  }

  //REVISAR ESTE METODO (esto obtiene la data desde el formulario-reutilizable y la envia por POST
  //usando el service de Accounts.
  /*onSubmit(event: any){
    this.data = event;
    console.log(this.data) //TODO: ELIMINAR cuando ya no se necesite
    this.acountSvc.createDeposit(this.data);
  }*/

  //REVISAR ESTE METODO (esto obtiene la data desde el formulario-reutilizable y la envia por POST
  //usando el service de Transactions.
  onSubmit(event: any){
    this.data = event;
    console.log(this.data) //TODO: ELIMINAR cuando ya no se necesite
    this.transSvc.createTransaction(this.data).subscribe(res =>{
      console.log(res);
    });
  };

}
