import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  exchangeResponse: string = '';
  error: string = '';

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

    this.service.getDolar().subscribe(
      resp => {
        this.exchangeResponse = resp[0].casa.compra;
      },
      err => {
        this.error = err.message;
      }
    );
  }
  valor1: number = 0;
  valor2: number = 0;
  onSubmit() {
    this.valoresFormulario1 = this.form.value.pesoDolar;
    this.valoresFormulario2 = this.form.value.dolarPeso;
    this.valor1 = this.service.convert(this.valoresFormulario1, true, this.exchangeResponse);
    this.valor2 = this.service.convert(this.valoresFormulario2, false, this.exchangeResponse);
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
