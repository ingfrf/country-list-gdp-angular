import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CountryService} from '../../../services/country.service';
import {LOAD_COUNTRIES, LoadCountries, LoadCountriesFail, LoadCountriesSuccess} from '../actions/countries.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class CountriesEffect {
  @Effect()
  loadCountries$ = this.actions$
    .pipe(
      ofType(LOAD_COUNTRIES)
    ).pipe(
      switchMap((action: LoadCountries) => {
        return this.countryService.getAllCountries(action.request)
          .pipe(
            map(countries => new LoadCountriesSuccess(countries)),
            catchError(err => of(new LoadCountriesFail(err)))
          );
      })
    );

  constructor(private actions$: Actions, private countryService: CountryService) {
  }
}
