import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { casaApi, ExchangeResponse } from 'src/app/core/models/ExchangeDivisas.models'
import { ExchangeConvertService } from 'src/app/core/services/ExchangeDivisas/Exchange.divisas.service';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  
  form: FormGroup;

  exchangeResponse: ExchangeResponse = new ExchangeResponse (new casaApi())

  error: string = ""

  constructor(private exchangeService: ExchangeConvertService, private readonly formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      pesos: ['', [Validators.required]],
      dolares: ['']
    })
   }


  ngOnInit(): void {
    this.exchangeService.getDolar().subscribe( (resp) => {
      this.exchangeResponse = resp[0];
      
    },
    (err) => {
      this.error = err.message;
    })

  }


  onSubmit(){
    this.form.patchValue({
      dolares: this.exchangeService.convert(Number(this.form.get('pesos')?.value), true).toFixed(2)
    });

    //si pongo false, hace lo contrario
  }

  
  
}
 