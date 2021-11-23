import {Action} from '@ngrx/store';

export const LOAD_REGIONS = '[REGIONS] Load regions';
export const LOAD_REGIONS_FAIL = '[REGIONS] Load regions fail';
export const LOAD_REGIONS_SUCCESS = '[REGIONS] Load regions success';

export class LoadRegions implements Action {
  readonly type = LOAD_REGIONS;
}

export class LoadRegionsFail implements Action {
  readonly type = LOAD_REGIONS_FAIL;

  constructor(public payload: any) {
  }

}

export class LoadRegionsSuccess implements Action {
  readonly type = LOAD_REGIONS_SUCCESS;

  constructor(public regions: string[]) {
  }

}

export type regionsActions = LoadRegions | LoadRegionsFail | LoadRegionsSuccess;
