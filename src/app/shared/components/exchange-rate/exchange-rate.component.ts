import { Component, OnInit } from '@angular/core';
import { ExchangeService } from 'src/app/core/services/exchange.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {
  public valorCompra:any;
  public valorVenta:any;
  
  // Ttile que iba en el componente rtitle, probablemente copiar al componente contenedor
  //exchangeTitle:string = 'Tipo de cambio del dia de la fecha';  

  constructor(private excSvc:ExchangeService) { }

  ngOnInit(): void {
    this.getValores()
  }

  
  //Metodo para obtener los valores del Api de cotizacion de Dolar. Comentado ya que todavia
  //no se aprobo el PR con el servcie de exchange actualizado con la API. REVISAR CODIGO
  
  /*getValores(){
    this.excSvc.getDolar().subscribe(
      res =>{
        this.valorCompra = res[0].casa.compra;
        console.log(this.valorCompra)
        this.valorVenta = res[0].casa.venta;
        console.log(this.valorVenta)
      }
    );
  }*/

  getValores(){
    this.excSvc.getDolar().subscribe(
      (res:any) =>{
        this.valorCompra = res[0].value_buy;
        this.valorVenta = res[0].value_sell;
      }
    )
  }
}

