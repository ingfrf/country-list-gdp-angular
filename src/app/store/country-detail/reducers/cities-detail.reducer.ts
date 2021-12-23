import {CityModel} from '../../../models/city.model';
import {
  citiesDetailActions,
  LOAD_CITIES_DETAIL,
  LOAD_CITIES_DETAIL_FAIL,
  LOAD_CITIES_DETAIL_SUCCESS
} from '../actions/cities-detail.actions';

export interface CitiesState {
  code: string;
  cities: CityModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: CitiesState = {
  code: null,
  cities: null,
  loaded: false,
  loading: false,
  error: null
};

export function citiesDetailReducer(state = initialState, action: citiesDetailActions): CitiesState {
  switch (action.type) {
    case LOAD_CITIES_DETAIL:
      return {
        code: action.code,
        cities: null,
        loading: true,
        loaded: false,
        error: null
      };
    case LOAD_CITIES_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        cities: [
          ...action.cities.map(city => {
            return {
              ...city
            };
          })
        ]
      };
    case LOAD_CITIES_DETAIL_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload,
        cities: null
      };
    default:
      return state;
  }
}
