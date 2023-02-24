import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import * as console from 'console';
import { Router } from '@angular/router';
import { TransactionsService } from 'src/app/core/services/transactions.service';

@Component({
  selector: 'app-investements',
  templateUrl: './investements.component.html',
  styleUrls: ['./investements.component.scss']
})
export class InvestementsComponent implements OnInit {

  title: string = 'Inversiones';

  constructor(private formBuilder: FormBuilder, 
              private toast: ToastService,
              private transSvc: TransactionsService,
              private router: Router) {
  }

  inversion = this.formBuilder.group({
    deposito: ['', [
      Validators.required,
      Validators.min(1),
      Validators.max(1000000)
    ]],
    dias: ['', [
      Validators.required,
      Validators.min(30),
      Validators.max(360)
    ]],
  });

  ngOnInit(): void {
  }

  //inputs
  deposito! : number; // = this.inversion.get('inversion')?.value;; //dinero a invertir
  plazoDias! : number; //plazo en dias
  data! : number;

  mensual! : number;
  anual! : number; //ganancia
  finalPlazo! : number;
  totalAnual! : number; //inversion + ganancia anual
  totalPlazo! : number; //inersion + ganancia plazo


  private tasaInversion: number = 75;

  onClick($event: MouseEvent) {
    this.deposito = Number (this.inversion.get('deposito')?.value) ;
    this.plazoDias = Number (this.inversion.get('dias')?.value) ;
    this.mensual = this.calcularGananciaDiaria(),
    this.calcularGananciaAnual(),
    this.calcularTotalAnual(),
    this.calcularGananciaPorPlazo(),
    this.calcularTotalPlazo()
  }

  invertir($event: MouseEvent){
    //descontar dinero cuenta
    this.data = Number (this.inversion.get('deposito')?.value) ;
    this.transSvc.createTransaction(this.data).subscribe;
    this.toast.success("La operación se realizó con éxito");
    this.router.navigate(['home']);
  }

  calcularGananciaDiaria(){
    return this.mensual = (this.deposito*(this.tasaInversion/12))/100;
  }

  calcularGananciaAnual(){
    return this.anual = (this.deposito*(this.tasaInversion/100));
  }

  calcularTotalAnual(){
    return this.totalAnual = (this.deposito + this.anual);
  }

  calcularGananciaPorPlazo(){
    this.totalPlazo = (this.deposito * this.tasaInversion * this.plazoDias) / (36000);
  }


  calcularTotalPlazo(){
    this.finalPlazo = (this.deposito + this.totalPlazo);
  }

}
