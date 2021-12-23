import {ActionReducerMap} from '@ngrx/store';
import {regionsReducer, RegionsState} from './country-list/reducers/regions.reducer';
import {continentsReducer, ContinentsState} from './country-list/reducers/continents.reducer';
import {countriesReducer, CountriesState} from './country-list/reducers/countries.reducer';
import {countryDetailReducer, DetailState} from './country-detail/reducers/country-detail.reducer';
import {languageDetailReducer, LanguageState} from './country-detail/reducers/language-detail.reducer';
import {citiesDetailReducer, CitiesState} from './country-detail/reducers/cities-detail.reducer';

export interface AppState {
  regions: RegionsState;
  continents: ContinentsState;
  countries: CountriesState;
  detail: DetailState;
  language: LanguageState;
  city: CitiesState;
}

export const appReducers: ActionReducerMap<AppState> = {
  regions: regionsReducer,
  continents: continentsReducer,
  countries: countriesReducer,
  detail: countryDetailReducer,
  language: languageDetailReducer,
  city: citiesDetailReducer
};

