import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClinicOutcomesState } from '../reducers/clinic-outcomes.reducer';
import { GmiDataItem, TimeInRangeDataItem } from '../../models/clinic-outcomes.model';

export const selectClinicOutcomesState = createFeatureSelector<ClinicOutcomesState>('clinicOutcomes');


export const selectClinicOutcomesData = createSelector(
    selectClinicOutcomesState,
    (state: ClinicOutcomesState) => state.data
);


export const selectTimeInRangeData = createSelector(
    selectClinicOutcomesState,
    (state: ClinicOutcomesState) => state.data ? state.data.timeInRangeData : [] as TimeInRangeDataItem[]
);


export const selectGmiData = createSelector(
    selectClinicOutcomesState,
    (state: ClinicOutcomesState) => state.data ? state.data.gmiData : [] as GmiDataItem[]
);


export const selectAverageGmi = createSelector(
    selectClinicOutcomesState,
    (state: ClinicOutcomesState) => state.data ? state.data.averageGmi : null
);


export const selectStartDate = createSelector(
    selectClinicOutcomesState,
    (state: ClinicOutcomesState) => state.data ? state.data.startDate : null
);


export const selectEndDate = createSelector(
    selectClinicOutcomesState,
    (state: ClinicOutcomesState) => state.data ? state.data.endDate : null
);


export const selectLastUpdated = createSelector(
    selectClinicOutcomesState,
    (state: ClinicOutcomesState) => state.data ? state.data.lastUpdated : null
);