import { Injectable } from '@angular/core';
import { ExchangeResponse, casaApi } from '../models/ExchangeDivisas.models';
import { HttpClient, } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  api = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
  
  constructor(/*private http: HttpClient*/ private http:HttpService) {}

  convert(amount: number, toDolar: boolean, cotizacionHoy: string): number {
    if (toDolar) {
      return amount / parseFloat(cotizacionHoy);
    }
    return parseFloat(cotizacionHoy) * amount;
  }

  getDolar(){
    return this.http.get<ExchangeResponse[]>(this.api);
  }

}
