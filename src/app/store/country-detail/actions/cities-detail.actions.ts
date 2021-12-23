import {Action} from '@ngrx/store';
import {CityModel} from '../../../models/city.model';

export const LOAD_CITIES_DETAIL = '[CITIES DETAIL] Load cities detail';
export const LOAD_CITIES_DETAIL_FAIL = '[CITIES DETAIL] Load cities detail fail';
export const LOAD_CITIES_DETAIL_SUCCESS = '[CITIES DETAIL] Load cities detail success';

export class LoadCitiesDetail implements Action {
  readonly type = LOAD_CITIES_DETAIL;
  constructor(public code: string) {
  }
}

export class LoadCitiesDetailFail implements Action {
  readonly type = LOAD_CITIES_DETAIL_FAIL;
  constructor(public payload: any) {
  }
}

export class LoadCitiesDetailSuccess implements Action {
  readonly type = LOAD_CITIES_DETAIL_SUCCESS;
  constructor(public cities: CityModel[]) {
  }
}

export type citiesDetailActions = LoadCitiesDetail | LoadCitiesDetailFail | LoadCitiesDetailSuccess;
