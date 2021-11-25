import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CountryService} from '../../services/country.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {LOAD_REGIONS, LoadRegionsFail, LoadRegionsSuccess} from '../actions/regions.actions';

@Injectable()
export class RegionsEffect {

  // loadContinents$ es un observable que se va a disparar
  // cuando el tipo de accion es LOAD_CONTINENTS
  @Effect()
  loadRegions$ = this.actions$
    .pipe(
      ofType(LOAD_REGIONS)
    ).pipe(
      switchMap(() => {
        return this.countryService.getAllRegions()
          .pipe(
            map(regions => new LoadRegionsSuccess(regions)),
            catchError(error => of(new LoadRegionsFail(error)))
          );
      })
    );

  constructor(private actions$: Actions, private countryService: CountryService) {
  }
}
