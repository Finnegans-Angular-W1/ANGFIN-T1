import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Spinner } from '../../models/spinner';

const getState = createFeatureSelector <Spinner>('isLoading');

export const getLoading = createSelector (getState, (state) =>{
    return state.showLoading;
});