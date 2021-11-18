import { Component } from '@angular/core';
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  globeIcon = faGlobeAmericas;
  title = 'country-list-gdp';
}
