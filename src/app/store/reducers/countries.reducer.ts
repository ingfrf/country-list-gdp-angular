import {countriesActions, LOAD_COUNTRIES, LOAD_COUNTRIES_FAIL, LOAD_COUNTRIES_SUCCESS} from '../actions/countries.actions';
import {CountriesResponseModel} from '../../models/countries-response.model';

export interface CountriesState {
  countries: CountriesResponseModel;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: CountriesState = {
  countries: null,
  loaded: false,
  loading: false,
  error: null
};

export function countriesReducer(state = initialState, action: countriesActions): CountriesState {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOAD_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        countries: action.countries
      };
    case LOAD_COUNTRIES_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: [...action.payload]
      };
    default:
      return state;
  }
}
