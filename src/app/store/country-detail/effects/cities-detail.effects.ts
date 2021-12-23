import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CityService} from '../../../services/city.service';
import {of} from 'rxjs';
import {LOAD_CITIES_DETAIL, LoadCitiesDetail, LoadCitiesDetailFail, LoadCitiesDetailSuccess} from '../actions/cities-detail.actions';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable()
export class CitiesEffects {
  @Effect()
  loadCities$ = this.actions$
    .pipe(
      ofType(LOAD_CITIES_DETAIL)
    ).pipe(
      switchMap((action: LoadCitiesDetail) => {
        return this.cityService.getCitiesByCountryCode(action.code)
          .pipe(
            map(cities => new LoadCitiesDetailSuccess(cities)),
            catchError(err => of(new LoadCitiesDetailFail(err)))
          );
      })
    );
  constructor(private actions$: Actions, private cityService: CityService) {
  }
}
