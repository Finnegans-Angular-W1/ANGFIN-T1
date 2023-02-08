import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  casaApi,
  ExchangeResponse,
} from 'src/app/core/models/ExchangeDivisas.models';
import { ExchangeService } from 'src/app/core/services/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
})
export class ExchangeComponent implements OnInit {
  public form!: FormGroup;
  @Output() handleSubmit = new EventEmitter();
  valoresFormulario1 = 0;
  valoresFormulario2 = 0;

  constructor(
    private service: ExchangeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.botonDeCAMBIO) {
      this.form = this.formBuilder.group({
        pesoDolar: ['0', [Validators.required]],
        dolarPeso: ['0', [Validators.required]],
      });
    }
  }
  valor1: number = 0;
  valor2: number = 0;
  onSubmit() {
    this.valoresFormulario1 = this.form.value.pesoDolar;
    this.valoresFormulario2 = this.form.value.dolarPeso;
    this.valor1 = this.service.convert(this.valoresFormulario1, true);
    this.valor2 = this.service.convert(this.valoresFormulario2, false);
    
    //this.handleSubmit.emit(this.form?.value);
  }

  //Aca funcionalidad de cambios
  botonDeCAMBIO = true;

  ClickDeCAMBIO() {
    if (this.botonDeCAMBIO) {
      this.botonDeCAMBIO = false;
    } else {
      this.botonDeCAMBIO = true;
    }
  }
}
