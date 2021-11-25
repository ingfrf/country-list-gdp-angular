import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CountriesResponseModel} from '../models/countries-response.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = `http://localhost:9090/gdp/api`;

  constructor(private httpClient: HttpClient) {
  }

  getAllRegions() {
    return this.httpClient.get<string[]>(`${this.url}/regions`);
  }

  getAllContinents() {
    return this.httpClient.get<string[]>(`${this.url}/continents`);
  }

  getAllCountries(page: number) {
    return this.httpClient.get<CountriesResponseModel>(`${this.url}/countries?page=${page}`);
    /*.subscribe(
       response => console.log(response),
       error => console.error(error)
     );*/
  }
}
