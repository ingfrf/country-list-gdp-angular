import {Injectable} from '@angular/core';
import {serviceUrl} from './service-constants';
import {HttpClient} from '@angular/common/http';
import {CityModel} from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private url = serviceUrl;

  constructor(private httpClient: HttpClient) {
  }

  getCitiesByCountryCode(code: string) {
    return this.httpClient.get<CityModel[]>(`${this.url}/cities?code=${code}`);
  }
}
