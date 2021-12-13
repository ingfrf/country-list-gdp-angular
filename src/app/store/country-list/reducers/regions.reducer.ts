import {LOAD_REGIONS, LOAD_REGIONS_FAIL, LOAD_REGIONS_SUCCESS, regionsActions} from '../actions/regions.actions';

export interface RegionsState {
  regions: string[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: RegionsState = {
  regions: [],
  loaded: false,
  loading: false,
  error: null
};

export function regionsReducer(state = initialState, action: regionsActions): RegionsState {
  switch (action.type) {
    case LOAD_REGIONS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOAD_REGIONS_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        regions: [...action.regions]
      };
    case LOAD_REGIONS_FAIL:
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
