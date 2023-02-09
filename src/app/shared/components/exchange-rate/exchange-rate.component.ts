import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {
  
  // Ttile que iba en el componente rtitle, probablemente copiar al componente contenedor
  //exchangeTitle:string = 'Tipo de cambio del dia de la fecha';  

  constructor() { }

  ngOnInit(): void {
  }

}
