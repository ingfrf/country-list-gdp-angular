import {CountryModel} from '../../../models/countries-response.model';
import {countryDetailActions, LOAD_COUNTRY_DETAIL} from '../actions/country-detail.actions';

export interface DetailState {
  country: CountryModel;
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: DetailState = {
  country: null,
  loading: false,
  loaded: false,
  error: null
};

export function countryDetailReducer(state = initialState, action: countryDetailActions): DetailState {
  switch (action.type) {
    case LOAD_COUNTRY_DETAIL:
      return {
        country: action.country,
        loading: true,
        loaded: false,
        error: null
      };
    default:
      return state;
  }
}
