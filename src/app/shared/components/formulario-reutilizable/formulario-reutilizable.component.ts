import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-reutilizable',
  templateUrl: './formulario-reutilizable.component.html',
  styleUrls: ['./formulario-reutilizable.component.scss'],
})
export class FormularioReutilizableComponent implements OnInit {
  @Output() handleSubmit = new EventEmitter();
  @Input() valor :any = {}
  actionForm!: FormGroup;
  @Input() date:boolean = true;
  constructor(private fb: FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.actionForm = this.fb.group({
      amount: [this.valor.amount, [Validators.required]],
      concept: [this.valor.concept, Validators.required],
      date: [this.valor.date],
    });
  
  }



  enviar() {
    this.handleSubmit.emit(this.actionForm.value);
  }

  //Maxi
  backHome(){
    const confirmation = confirm('Seguro que quieres regresar? Perderas todos los datos que hayas guardado');
    if(confirmation){
      this.router.navigate(['home']);
    }; 
  };
};
