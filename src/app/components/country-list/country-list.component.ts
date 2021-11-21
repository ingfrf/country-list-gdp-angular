import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styles: []
})
export class CountryListComponent implements OnInit {
  searchForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl(null),
      continent: new FormControl(null),
      region: new FormControl(null)
    });
  }

}
