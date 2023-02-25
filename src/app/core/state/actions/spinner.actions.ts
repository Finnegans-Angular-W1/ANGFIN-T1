import { createAction, props } from '@ngrx/store';

export const setLoadingSpinner = createAction(
  '[Loading Spinner] Set Loading Spinner',
  props<{ status: boolean }>()
);
