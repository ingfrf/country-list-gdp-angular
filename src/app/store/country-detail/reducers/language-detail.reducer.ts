import {LanguageModel} from '../../../models/language.model';
import {
  languageDetailActions,
  LOAD_LANGUAGE_DETAIL,
  LOAD_LANGUAGE_DETAIL_FAIL,
  LOAD_LANGUAGE_DETAIL_SUCCESS
} from '../actions/language-detail.actions';

export interface LanguageState {
  countryCode: string;
  languages: LanguageModel[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: LanguageState = {
  countryCode: null,
  languages: null,
  loading: false,
  loaded: false,
  error: null
};

export function languageDetailReducer(state = initialState, action: languageDetailActions): LanguageState {
  switch (action.type) {
    case LOAD_LANGUAGE_DETAIL:
      return {
        countryCode: action.code,
        languages: null,
        loading: true,
        loaded: false,
        error: null
      };
    case LOAD_LANGUAGE_DETAIL_SUCCESS:
      return {
        ...state,
        languages: action.laguages,
        loading: false,
        loaded: true,
        error: null
      };
    case LOAD_LANGUAGE_DETAIL_FAIL:
      return {
        ...state,
        languages: null,
        loading: false,
        loaded: false,
        error: action.payload
      };
    default:
      return {...state};
  }
}
