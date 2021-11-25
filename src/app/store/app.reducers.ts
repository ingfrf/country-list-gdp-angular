import {ActionReducerMap} from '@ngrx/store';
import {regionsReducer, RegionsState} from './reducers/regions.reducer';
import {continentsReducer, ContinentsState} from './reducers/continents.reducer';
import {countriesReducer, CountriesState} from './reducers/countries.reducer';

export interface AppState {
  regions: RegionsState;
  continents: ContinentsState;
  countries: CountriesState;
}

export const appReducers: ActionReducerMap<AppState> = {
  regions: regionsReducer,
  continents: continentsReducer,
  countries: countriesReducer
};

