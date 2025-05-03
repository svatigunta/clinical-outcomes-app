import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import {
    loadClinicOutcomes,
    loadClinicOutcomesSuccess,
    loadClinicOutcomesFailure
} from '../actions/clinic-outcomes.actions';


@Injectable()
export class ClinicOutcomesEffects {
    private actions$ = inject(Actions);
    private dataService = inject(DataService);

    loadClinicOutcomes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadClinicOutcomes),
            mergeMap(action =>
                this.dataService.getClinicOutcomesData(action.days).pipe(
                    map(data => loadClinicOutcomesSuccess({ data: data })),
                    catchError(error => of(loadClinicOutcomesFailure({ error: error })))
                )
            )
        )
    );
}