import {Component, Input, OnInit} from '@angular/core';
import {faBackspace, faCertificate} from '@fortawesome/free-solid-svg-icons';
import {registerLocaleData} from '@angular/common';
import es from '@angular/common/locales/es';
import {LanguageModel} from '../../models/language.model';

@Component({
  selector: 'app-language-list',
  template: `
    <div class="card">
      <div class="card-body">
        <div class="d-flex">
          <h5 class="my-auto" [ngClass]="{'flex-grow-1': !language.isOfficial}">{{language.language}}</h5>
          <fa-icon *ngIf="language.isOfficial" [icon]="mainIcon" class="mx-1 my-auto flex-grow-1" style="color: green"></fa-icon>
          <div class="my-auto badge bg-info text-dark">{{language.percentage/100 | percent:'.2':'es'}}</div>
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
export class LanguageListComponent implements OnInit {

  deleteIcon = faBackspace;
  mainIcon = faCertificate;
  @Input() language: LanguageModel;

  constructor() {
  }

  ngOnInit(): void {
    registerLocaleData( es );
  }

}
