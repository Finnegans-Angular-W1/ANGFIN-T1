import { createAction, props } from '@ngrx/store';

export const errorAlert = createAction(
  '[Error Alert]',
  props<{ message: string }>()
);

export const warningAlert = createAction(
  '[Warning Alert]',
  props<{ message: string }>()
);

export const successAlert = createAction(
  '[Success Alert]',
  props<{ message: string }>()
);
