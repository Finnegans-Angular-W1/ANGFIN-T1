import { Pipe, PipeTransform } from "@angular/core";
import { TransactionType } from "src/app/core/models/transactions";

@Pipe({name: 'amount'})

export class AmountPipe implements PipeTransform {
  transform(num: number, args:TransactionType): number {
    return args === 'topup' ? num : -Math.abs(num);
  }
}