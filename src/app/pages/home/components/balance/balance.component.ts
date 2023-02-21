import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent {
  constructor() {}

  showMoney: boolean = true;
  @Input() money:any = 0;


  toggleShowMoney() {
    this.showMoney = !this.showMoney;
  }
}
