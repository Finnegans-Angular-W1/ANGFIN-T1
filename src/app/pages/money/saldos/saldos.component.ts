import { Component, OnInit, OnDestroy } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AccountsService } from 'src/app/core/services/accounts.service';
import { getData } from 'src/app/core/state/actions/data.action';
import { AppState } from 'src/app/core/state/app.state';
import { selectDataImportant } from 'src/app/core/state/selector/data.selector';
import { DialogGenericoComponent } from 'src/app/shared/components/dialog/components/dialos.generic';

@Component({
  selector: 'app-saldos',
  templateUrl: './saldos.component.html',
  styleUrls: ['./saldos.component.scss']
})
export class SaldosComponent implements OnInit, OnDestroy {

  // componente reutilizable titulo
  saldosTitle: string = 'Saldos';

  // data a enviar a la api
  userId!: number;
  formData!: any;

  httpSubscription: Subscription = new Subscription;

  cargarSaldosForm!: FormGroup;

  constructor(
    private accountsService: AccountsService,
    private router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // TODO: Pendiente tomar el userId del store cuando el store esté implementado

    this.store.select(selectDataImportant).subscribe(res=>{
      this.userId = res.account_id
    })

    this.cargarSaldosForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      concept: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.formData = this.cargarSaldosForm.value;
    delete this.formData.date; // Borra la key 'date' que no es necesaria
    this.formData = {...this.formData, type: 'topup'}; // Agrega la key 'type' que la api requiere
    
    // POST
    this.httpSubscription = this.accountsService.createDeposit(this.userId, this.formData).subscribe({
      next: () => {
        this.dialog.open(DialogGenericoComponent, {
          data: {
            title: '¡Listo!',
            data: 'La operación fue realizada exitosamente'
          }
        })
      },
      error: () => {        
        this.dialog.open(DialogGenericoComponent, {
          data: {
            title: 'Error',
            data: `Ha ocurrido un error, por favor vuelva a intentarlo más tarde`
          }
        })
      },
      complete:()=>{
        this.store.dispatch(getData())
      }
    });
  }

  // Botón de regreso
  cancelar(): void {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.httpSubscription.unsubscribe();
  }

}
