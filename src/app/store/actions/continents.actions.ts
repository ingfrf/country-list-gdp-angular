import {Action} from '@ngrx/store';

export const LOAD_CONTINENTS = '[CONTINENTS] Load continents';
export const LOAD_CONTINENTS_FAIL = '[CONTINENTS] Load continents fail';
export const LOAD_CONTINENTS_SUCCESS = '[CONTINENTS] Load continents success';

export class LoadContinents implements Action {
  readonly type = LOAD_CONTINENTS;
  constructor(public region: string) {
  }
}

export class LoadContinentsFail implements Action {
  readonly type = LOAD_CONTINENTS_FAIL;

  constructor(public payload: any) {
  }

}

export class LoadContinentsSuccess implements Action {
  readonly type = LOAD_CONTINENTS_SUCCESS;

  constructor(public continents: string[]) {
  }

}

export type continentsActions = LoadContinents | LoadContinentsFail | LoadContinentsSuccess;
