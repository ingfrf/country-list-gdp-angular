import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CountriesResponseModel} from '../models/countries-response.model';
import {CountriesRequestModel} from '../models/countries-request.model';
import {serviceUrl} from './service-constants';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = serviceUrl;

  constructor(private httpClient: HttpClient) {
  }

  getRegions(continent: string) {
    return this.httpClient.get<string[]>(`${this.url}/regions?continent=${continent}`);
  }

  getContinents(region: string) {
    return this.httpClient.get<string[]>(`${this.url}/continents?region=${region}`);
  }

  getAllCountries(parameters: CountriesRequestModel) {
    const httpHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<CountriesResponseModel>(`${this.url}/countries`, parameters, {headers: httpHeader});
    /*.subscribe(
       response => console.log(response),
       error => console.error(error)
     );*/
  }
}
