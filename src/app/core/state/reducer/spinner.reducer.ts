import { Spinner } from '../../models/spinner';
import { createReducer, on } from '@ngrx/store';
import { setLoadingSpinner } from '../actions/spinner.actions';


export const initialState : Spinner = {
    showLoading : false,
};

export const spinnerReducer = createReducer (
    initialState, 
    on(setLoadingSpinner, (state: any, action: { status: any; })=>{
        return {
            ...state,
            showLoading : action.status,
        };
    })
);