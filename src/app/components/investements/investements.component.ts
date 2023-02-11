import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as console from 'console';

@Component({
  selector: 'app-investements',
  templateUrl: './investements.component.html',
  styleUrls: ['./investements.component.scss']
})
export class InvestementsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  inversion = this.formBuilder.group({
    deposito: ['', [
      Validators.required,
      Validators.min(1),
      Validators.max(1000000)
    ]],
  });

  plazo = this.formBuilder.group({
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

  mensual! : number;
  anual! : number; //ganancia
  finalPlazo! : number;
  totalAnual! : number; //inversion + ganancia anual
  totalPlazo! : number; //inersion + ganancia plazo


  private tasaInversion: number = 75;

  onClick($event: MouseEvent) {
    this.deposito = Number (this.inversion.get('deposito')?.value) ;
    this.plazoDias = Number (this.plazo.get('dias')?.value) ;
    this.mensual = this.calcularGananciaDiaria(),
    this.calcularGananciaAnual(),
    this.calcularTotalAnual(),
    this.calcularGananciaPorPlazo(),
    this.calcularTotalPlazo()
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
