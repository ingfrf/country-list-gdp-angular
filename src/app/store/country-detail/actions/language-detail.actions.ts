import {Action} from '@ngrx/store';
import {LanguageModel} from '../../../models/language.model';

export const LOAD_LANGUAGE_DETAIL = '[LANGUAGE DETAIL] Load language detail';
export const LOAD_LANGUAGE_DETAIL_FAIL = '[LANGUAGE DETAIL] Load language detail fail';
export const LOAD_LANGUAGE_DETAIL_SUCCESS = '[LANGUAGE DETAIL] Load language detail success';

export class LoadLanguageDetail implements Action {
  readonly type = LOAD_LANGUAGE_DETAIL;
  constructor(public code: string) {}
}

export class LoadLanguageDetailSuccess implements Action {
  readonly type = LOAD_LANGUAGE_DETAIL_SUCCESS;
  constructor(public laguages: LanguageModel[]) {}
}

export class LoadLanguageDetailFail implements Action {
  readonly type = LOAD_LANGUAGE_DETAIL_FAIL;
  constructor(public payload: any) {}
}

export type languageDetailActions = LoadLanguageDetail | LoadLanguageDetailFail | LoadLanguageDetailSuccess;
