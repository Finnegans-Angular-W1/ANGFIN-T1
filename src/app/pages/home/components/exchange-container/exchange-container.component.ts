import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-container',
  templateUrl: './exchange-container.component.html',
  styleUrls: ['./exchange-container.component.scss']
})
export class ExchangeContainerComponent implements OnInit {
  exchTitle = 'Convertir Dinero'

  constructor() { }

  ngOnInit(): void {
  }

}
