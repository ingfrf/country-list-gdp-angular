import {ActionReducerMap} from '@ngrx/store';
import {regionsReducer, RegionsState} from './country-list/reducers/regions.reducer';
import {continentsReducer, ContinentsState} from './country-list/reducers/continents.reducer';
import {countriesReducer, CountriesState} from './country-list/reducers/countries.reducer';

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

