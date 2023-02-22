import { Injectable } from '@angular/core';
import { ExchangeResponse, casaApi } from '../models/ExchangeDivisas.models';
import { HttpClient, } from '@angular/common/http';
import { HttpService } from './http.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  //api = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
  //api = 'https://v6.exchangerate-api.com/v6/37320af4c06c07eb1ee10a03/pair/USD/ARS'
  api = 'https://api.bluelytics.com.ar/v2/latest?fbclid=IwAR2HHUdmNmnQkQ73I28FJpQcZjRLf-wGcTPvNOgQt4DD1YoGhA17RF3moc8'
  
  constructor(/*private http: HttpClient*/ private http:HttpService) {}

  convert(amount: number, toDolar: boolean, cotizacionHoy: string): number {
    if (toDolar) {
      return amount / parseFloat(cotizacionHoy);
    }
    return parseFloat(cotizacionHoy) * amount;
  }

  /*getDolar(){
    return this.http.get<ExchangeResponse[]>(this.api);
  }*/


  //metodo creado por MAXI para la api Bluelitycs
  getDolar(){
    return this.http.get(this.api).pipe(
      map((res: any) => Object.values(res))
  )}

}
