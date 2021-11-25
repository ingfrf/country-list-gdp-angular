import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AppState} from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import {LoadContinents} from '../../store/actions/continents.actions';
import {LoadRegions} from '../../store/actions/regions.actions';
import {LoadCountries} from '../../store/actions/countries.actions';
import {CountryModel} from '../../models/countries-response.model';


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

  constructor(private store: Store<AppState>) {
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
    this.store.dispatch(new LoadContinents());
    this.store.dispatch(new LoadRegions());
    this.store.dispatch(new LoadCountries(0));

    this.searchForm = new FormGroup({
      name: new FormControl(null),
      continent: new FormControl(null),
      region: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.searchForm);
  }

  findCountries() {
    console.log(this.pageNumber);
    // this.pageNumber is updated by the view
    this.store.dispatch(new LoadCountries(this.pageNumber - 1));
  }
}
