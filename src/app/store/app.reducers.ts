import {ActionReducerMap} from '@ngrx/store';
import {regionsReducer, RegionsState} from './reducers/regions.reducer';
import {continentsReducer, ContinentsState} from './reducers/continents.reducer';

export interface AppState {
  regions: RegionsState;
  continents: ContinentsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  regions: regionsReducer,
  continents: continentsReducer
};

