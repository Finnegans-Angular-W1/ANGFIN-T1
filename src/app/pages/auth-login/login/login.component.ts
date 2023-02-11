import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertState } from 'src/app/core/models/types';
import { errorAlert, successAlert, warningAlert } from 'src/app/core/state/actions/alert.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private store: Store<AlertState>) {}

  handleSubmit(data: { email: string; password: string }) {
    // console.log(data);
    this.store.dispatch(errorAlert({message:"holis"}))
    // TODO

  }
}
