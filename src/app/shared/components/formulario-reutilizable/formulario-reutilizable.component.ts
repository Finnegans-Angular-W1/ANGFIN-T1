import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario-reutilizable',
  templateUrl: './formulario-reutilizable.component.html',
  styleUrls: ['./formulario-reutilizable.component.scss'],
})
export class FormularioReutilizableComponent implements OnInit {
  @Output() handleSubmit = new EventEmitter();
  @Input() valor :any = {}
  actionForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.actionForm = this.fb.group({
      amount: [this.valor.amount, [Validators.required, Validators.min(0)]],
      concept: [this.valor.concept, Validators.required],
      date: [this.valor.date, Validators.required],
    });
  
  }



  enviar() {
    this.handleSubmit.emit(this.actionForm.value);
  }
}
