import { createReducer, on } from '@ngrx/store';
import { loadClinicOutcomesSuccess, loadClinicOutcomesFailure } from '../actions/clinic-outcomes.actions';
import { ClinicOutcomesResponse } from '../../models/clinic-outcomes.model';


export interface ClinicOutcomesState {
    data: ClinicOutcomesResponse | null;
    loading: boolean;
    error: any;
}


export const initialState: ClinicOutcomesState = {
    data: null,
    loading: false,
    error: null
};


export const clinicOutcomesReducer = createReducer(
    initialState,
    on(loadClinicOutcomesSuccess, (state, { data }) => ({ ...state, data: data, loading: false, error: null })),
    on(loadClinicOutcomesFailure, (state, { error }) => ({ ...state, data: null, loading: false, error: error }))
);