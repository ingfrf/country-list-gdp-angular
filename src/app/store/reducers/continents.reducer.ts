import {continentsActions, LOAD_CONTINENTS, LOAD_CONTINENTS_FAIL, LOAD_CONTINENTS_SUCCESS} from '../actions/continents.actions';

export interface ContinentsState {
  continents: string[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: ContinentsState = {
  continents: [],
  loaded: false,
  loading: false,
  error: null
};

export function continentsReducer(state = initialState, action: continentsActions): ContinentsState {
  switch (action.type) {
    case LOAD_CONTINENTS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOAD_CONTINENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        continents: [...action.continents]
      };
    case LOAD_CONTINENTS_FAIL:
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
