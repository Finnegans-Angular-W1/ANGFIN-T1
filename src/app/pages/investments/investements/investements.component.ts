import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';
//import * as console from 'console';
import { Router } from '@angular/router';
import { TransactionsService } from 'src/app/core/services/transactions.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import { AccountsService } from 'src/app/core/services/accounts.service';
import { selectDataImportant } from 'src/app/core/state/selector/data.selector';
import { getData } from 'src/app/core/state/actions/data.action';

@Component({
  selector: 'app-investements',
  templateUrl: './investements.component.html',
  styleUrls: ['./investements.component.scss']
})
export class InvestementsComponent implements OnInit {

  title: string = 'Inversiones';
  //Maxi
  accountId!:number;
  //

  constructor(private formBuilder: FormBuilder, 
              private toast: ToastService,
              private transSvc: TransactionsService,
              private router: Router,
              private store:Store<AppState>,
              private accSvc:AccountsService) {
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
    this.store.select(selectDataImportant).subscribe(res =>{
      this.accountId = res.account_id;
    })
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
    const body:any ={
      amount:this.data >0? this.data*(-1): this.data,
      concept:'Plazo Fijo',
      type:'payment'
    }
    
    this.accSvc.createDeposit(this.accountId,body).subscribe({
      next:res =>{this.toast.success('La operacion ha sido exitosa!')},
      error: err =>{this.toast.error('Algo ha salido mal!'); console.log(err)},
      complete: () => {this.store.dispatch(getData())}
    })
    
    //this.transSvc.createTransaction(this.data).subscribe;
    //this.toast.success("La operación se realizó con éxito");
    this.router.navigate(['home']);
  }

  backHome(){
    const confirmation = confirm('Seguro que quieres regresar? Perderas todos los datos que hayas guardado');
    if(confirmation){
      this.router.navigate(['home'])
    }
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
