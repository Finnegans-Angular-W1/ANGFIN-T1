import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/core/models/transactions';
import { TransactionsService } from 'src/app/core/services/transactions.service';
import { FormularioReutilizableComponent } from 'src/app/shared/components/formulario-reutilizable/formulario-reutilizable.component';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.scss'],
})
export class TransaccionesComponent  {
  editar: Boolean = false
  indiceEditando: number = -1
  data!: any;
  ObjetoEditar!: Transaction;
  @Input() transactions!: Transaction[];
  constructor(private transSvc : TransactionsService) {
  }

  // TODO: Elminar mook data

  editarGasto(i: number, editar:Transaction) {
    this.indiceEditando = i
    this.editar ? this.editar = false : this.editar = true
    this.ObjetoEditar =editar
  }
  onSubmit(event: any) {
    this.data= event;
    this.ObjetoEditar.amount = this.data.amount
    this.ObjetoEditar.concept = this.data.concept
    this.ObjetoEditar.date = this.data.date
    this.transSvc.updateTransaction(this.ObjetoEditar).subscribe(res => {
      console.log(this.ObjetoEditar);
    });
  }
}
