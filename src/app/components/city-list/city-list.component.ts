import {Component, Input, OnInit} from '@angular/core';
import {faBackspace} from '@fortawesome/free-solid-svg-icons';
import es from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import {CityModel} from '../../models/city.model';

@Component({
  selector: 'app-city-list',
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{city.name}}</h5>
        <div class="d-flex">
          <div class="flex-grow-1 my-auto">{{city.district}}</div>
          <div class="my-auto badge bg-info text-dark">{{city.population | number:'':'es'}}</div>
          <div>
            <button type="button" class="btn btn-light">
              <fa-icon [icon]="deleteIcon" style="color: red"></fa-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CityListComponent implements OnInit {

  deleteIcon = faBackspace;
  @Input() city: CityModel;

  constructor() {
  }

  ngOnInit(): void {
    registerLocaleData( es );
  }

}
