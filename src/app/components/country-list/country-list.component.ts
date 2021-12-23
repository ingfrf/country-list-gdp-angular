import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AppState} from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import {LoadContinents} from '../../store/country-list/actions/continents.actions';
import {LoadRegions} from '../../store/country-list/actions/regions.actions';
import {LoadCountries} from '../../store/country-list/actions/countries.actions';
import {CountryModel} from '../../models/countries-response.model';
import {CountriesRequestModel} from '../../models/countries-request.model';
import {Router} from '@angular/router';
import {LoadCountryDetail} from '../../store/country-detail/actions/country-detail.actions';
import {LoadLanguageDetail} from '../../store/country-detail/actions/language-detail.actions';
import {LoadCitiesDetail} from '../../store/country-detail/actions/cities-detail.actions';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styles: []
})
export class CountryListComponent implements OnInit {
  searchForm: FormGroup;
  continents: string[];
  regions: string[];
  countries: CountryModel[];
  total = 0;
  pageNumber = 0;
  pageSize: number;
  request: CountriesRequestModel;

  constructor(private store: Store<AppState>, private router: Router) {
  }

  ngOnInit(): void {
    this.store.select('continents')
      .subscribe(params => {
        this.continents = params.continents;
      });
    this.store.select('regions')
      .subscribe(params => {
        this.regions = params.regions;
      });
    this.store.select('countries')
      .subscribe(params => {
        this.countries = params.countries && params.countries.content || [];
        this.total = params.countries && params.countries.totalElements || 0;
        this.pageNumber = params.countries && params.countries.number + 1 || 0;
        this.pageSize = params.countries && params.countries.size || 0;
      });

    // never forget to dispatch
    this.initialLoad();

    this.searchForm = new FormGroup({
      name: new FormControl(null),
      continent: new FormControl(null),
      region: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.searchForm);
    this.request = {
      page: 0,
      name: this.searchForm.get('name').value,
      continent: this.searchForm.get('continent').value,
      region: this.searchForm.get('region').value
    };
    console.log('--> ' + JSON.stringify(this.request));
    this.store.dispatch(new LoadCountries(this.request));
  }

  initialLoad() {
    // request initialization
    const initialRequest = {
      page: 0,
      name: null,
      continent: null,
      region: null
    };
    // array exists and is not empty
    if (!Array.isArray(this.continents) || !this.continents.length) {
      this.store.dispatch(new LoadContinents('All'));
    }
    if (!Array.isArray(this.regions) || !this.regions.length) {
      this.store.dispatch(new LoadRegions('All'));
    }
    if (!Array.isArray(this.regions) || !this.regions.length) {
      this.store.dispatch(new LoadCountries(initialRequest));
    }
  }

  findCountries() {
    console.log(this.pageNumber);
    this.request = {
      ...this.request,
      page: this.pageNumber - 1
    };
    // this.pageNumber is updated by the view
    this.store.dispatch(new LoadCountries(this.request));
  }

  onChangeContinent(event: any) {
    const value = event.target.value;
    console.log('c :: ' + value);
    if (value === 'All') {
      // patchValue doesn't need to set all values
      // set value sets all values of the form
      this.searchForm.patchValue({
        region: 'All'
      });
      this.store.dispatch(new LoadContinents('All'));
    }
    const continentSelected = this.searchForm.get('continent').value;
    this.store.dispatch(new LoadRegions(continentSelected));
  }

  onChangeRegion(event: any) {
    const value = event.target.value;
    console.log('r :: ' + value);
    if (value === 'All') {
      // patchValue doesn't need to set all values
      // set value sets all values of the form
      this.searchForm.patchValue({
        continent: 'All'
      });
      this.store.dispatch(new LoadRegions('All'));
    }
    const regionSelected = this.searchForm.get('region').value;
    this.store.dispatch(new LoadContinents(regionSelected));
  }

  onEdit(code: string) {
    const countrySelected = this.countries.find(country => country.code === code);
    this.store.dispatch(new LoadCountryDetail(countrySelected));
    this.store.dispatch(new LoadLanguageDetail(countrySelected.code));
    this.store.dispatch(new LoadCitiesDetail(countrySelected.code));
    this.router.navigate(['/detail']);
  }
}
