import {Action} from '@ngrx/store';
import {CountriesResponseModel} from '../../models/countries-response.model';
import {CountriesRequestModel} from '../../models/countries-request.model';

export const LOAD_COUNTRIES = '[COUNTRIES] Load countries';
export const LOAD_COUNTRIES_FAIL = '[COUNTRIES] Load countries fail';
export const LOAD_COUNTRIES_SUCCESS = '[COUNTRIES] Load countries success';

export class LoadCountries implements Action {
  readonly type = LOAD_COUNTRIES;

  constructor(public request: CountriesRequestModel) {
  }

}

export class LoadCountriesFail implements Action {
  readonly type = LOAD_COUNTRIES_FAIL;

  constructor(public payload: any) {
  }

}

export class LoadCountriesSuccess implements Action {
  readonly type = LOAD_COUNTRIES_SUCCESS;

  constructor(public countries: CountriesResponseModel) {
  }

}

export type countriesActions = LoadCountries | LoadCountriesFail | LoadCountriesSuccess;
