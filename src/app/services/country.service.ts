import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = `http://localhost:9090/gdp/api`;

  constructor(private httpClient: HttpClient) {
  }

  getAllRegions() {
    return this.httpClient.get(`${this.url}/regions`);
  }

  getAllContinents() {
    return this.httpClient.get<string[]>(`${this.url}/continents`);
      /*.subscribe(
        response => console.log(response),
        error => console.error(error)
      );*/
  }
}
