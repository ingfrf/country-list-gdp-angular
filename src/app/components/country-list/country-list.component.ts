import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AppState} from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import {LoadContinents} from '../../store/actions/continents.actions';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styles: []
})
export class CountryListComponent implements OnInit {
  searchForm: FormGroup;
  continents: string[];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('continents')
      .subscribe(params => {
        this.continents = params.continents;
      });
    // never forget to dispatch
    this.store.dispatch(new LoadContinents());

    this.searchForm = new FormGroup({
      name: new FormControl(null),
      continent: new FormControl(null),
      region: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.searchForm);
  }
}
