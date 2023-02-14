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
  actionForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.actionForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      concept: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  enviar() {
    this.handleSubmit.emit(this.actionForm.value);
  }
}
