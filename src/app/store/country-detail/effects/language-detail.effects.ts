import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LanguageService} from '../../../services/language.service';
import {
  LOAD_LANGUAGE_DETAIL,
  LoadLanguageDetail,
  LoadLanguageDetailFail,
  LoadLanguageDetailSuccess
} from '../actions/language-detail.actions';
import {catchError, switchMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class LanguageDetailEffect {
  @Effect()
  loadLanguages$ = this.action$
    .pipe(
      ofType(LOAD_LANGUAGE_DETAIL)
    ).pipe(
      switchMap((action: LoadLanguageDetail) => {
        return this.languageService.getLanguagesByCountryCode(action.code)
          .pipe(
            map(languages => new LoadLanguageDetailSuccess(languages)),
            catchError(err => of(new LoadLanguageDetailFail(err)))
          );
      })
    );

  constructor(private action$: Actions, private languageService: LanguageService) {
  }
}
