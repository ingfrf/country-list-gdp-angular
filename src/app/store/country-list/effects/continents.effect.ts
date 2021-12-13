import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CountryService} from '../../../services/country.service';
import {LOAD_CONTINENTS, LoadContinents, LoadContinentsFail, LoadContinentsSuccess} from '../actions/continents.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class ContinentsEffect {

  // loadContinents$ es un observable que se va a disparar
  // cuando el tipo de accion es LOAD_CONTINENTS
  @Effect()
  loadContinents$ = this.actions$
    .pipe(
      ofType(LOAD_CONTINENTS)
    ).pipe(
      switchMap((action: LoadContinents) => {
        return this.countryService.getContinents(action.region)
          .pipe(
            map(continents => new LoadContinentsSuccess(continents)),
            catchError(error => of(new LoadContinentsFail(error)))
          );
      })
    );

  constructor(private actions$: Actions, private countryService: CountryService) {
  }
}
