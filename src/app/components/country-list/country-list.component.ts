import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AppState} from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import {LoadContinents} from '../../store/actions/continents.actions';
import {LoadRegions} from '../../store/actions/regions.actions';
import {LoadCountries} from '../../store/actions/countries.actions';
import {CountryModel} from '../../models/countries-response.model';
import {CountriesRequestModel} from '../../models/countries-request.model';


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

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    // request initialization
    this.request = {
      page: 0,
      name: null,
      continent: null,
      region: null
    };

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
        if (params.countries) {
          this.countries = params.countries.content;
          this.total = params.countries.totalElements;
          this.pageNumber = params.countries.number + 1;
          this.pageSize = params.countries.size;
        } else {
          this.countries = [];
          this.total = 0;
          this.pageNumber = 0;
          this.pageSize = 0;
        }
      });
    // never forget to dispatch
    this.store.dispatch(new LoadContinents('All'));
    this.store.dispatch(new LoadRegions('All'));
    this.store.dispatch(new LoadCountries(this.request));

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
}
