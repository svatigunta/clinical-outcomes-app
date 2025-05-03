import { createAction, props } from '@ngrx/store';
import { ClinicOutcomesResponse } from '../../models/clinic-outcomes.model';
 

 export const loadClinicOutcomes = createAction(
  '[Clinic Outcomes] Load Clinic Outcomes',
  props<{ days: number }>()
 );
 

 export const loadClinicOutcomesSuccess = createAction(
  '[Clinic Outcomes] Load Clinic Outcomes Success',
  props<{ data: ClinicOutcomesResponse }>()
 );
 

 export const loadClinicOutcomesFailure = createAction(
  '[Clinic Outcomes] Load Clinic Outcomes Failure',
  props<{ error: any }>()
 );
