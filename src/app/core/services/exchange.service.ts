import { Injectable } from '@angular/core';
import { ExchangeResponse, casaApi } from '../models/ExchangeDivisas.models';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  
  constructor() {}

  convert(amount: number, toDolar: boolean): number {
    if (toDolar) {
      return amount / parseFloat('187');
    }
    return parseFloat('196') * amount;
  }
}
