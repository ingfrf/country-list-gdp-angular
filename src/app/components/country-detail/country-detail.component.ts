import {Component, OnDestroy, OnInit} from '@angular/core';
import {faEdit, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducers';
import {CountryModel} from '../../models/countries-response.model';
import {Subscription} from 'rxjs';
import {FlagService} from '../../services/flag.service';
import {CityModel} from '../../models/city.model';
import {LanguageModel} from '../../models/language.model';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styles: []
})
export class CountryDetailComponent implements OnInit, OnDestroy {

  editIcon = faEdit;
  plusIcon = faPlus;
  country: CountryModel;
  flagUrl: string;
  cities: CityModel[];
  languages: LanguageModel[];
  countrySubscription: Subscription = new Subscription();
  languageSubscription: Subscription = new Subscription();
  citySubscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>,
              private flagService: FlagService) {
  }

  ngOnInit(): void {
    this.countrySubscription = this.store.select('detail')
      .subscribe(params => {
        this.country = params.country;
        this.flagUrl = this.flagService.getFlag(params.country.code2);
      });
    this.languageSubscription = this.store.select('language')
      .subscribe(params => {
        this.languages = params.languages;
      });
    this.citySubscription = this.store.select('city')
      .subscribe(params => {
          this.cities = params.cities;
        }
      );
  }

  getDefaultFlag(event: any) {
    return event.target.src = this.flagService.getDefaultFlag();
  }

  ngOnDestroy(): void {
    this.countrySubscription.unsubscribe();
    this.languageSubscription.unsubscribe();
    this.citySubscription.unsubscribe();
  }
}
