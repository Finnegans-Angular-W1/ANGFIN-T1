import { createReducer, on } from '@ngrx/store';
import { AlertState, AlertType } from '../../models/types';
import {
  errorAlert,
  successAlert,
  warningAlert,
} from '../actions/alert.actions';

const initialState: AlertState = {
  type: null,
  message: '',
};

export const alertReducer = createReducer(
  initialState,
  on(errorAlert, (state, payload) => ({
    ...state,
    type: AlertType.Error,
    message: payload.message,
  })),
  on(warningAlert, (state, payload) => ({
    ...state,
    type: AlertType.Warning,
    message: payload.message,
  })),
  on(successAlert, (state, payload) => ({
    ...state,
    type: AlertType.Success,
    message: payload.message,
  }))
);
