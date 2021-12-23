import {Action} from '@ngrx/store';
import {CountryModel} from '../../../models/countries-response.model';

export const LOAD_COUNTRY_DETAIL = '[COUNTRY DETAIL] Load country detail';

export class LoadCountryDetail implements Action {
  readonly type = LOAD_COUNTRY_DETAIL;
  constructor(public country: CountryModel) {
  }
}

export type countryDetailActions = LoadCountryDetail;
