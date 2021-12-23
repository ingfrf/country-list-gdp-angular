import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LanguageModel} from '../models/language.model';
import {serviceUrl} from './service-constants';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private url = serviceUrl;

  constructor(private httpClient: HttpClient) {
  }

  getLanguagesByCountryCode(code: string) {
    return this.httpClient.get<LanguageModel[]>(`${this.url}/languages?code=${code}`);
      /*.subscribe(
        response => console.log(response),
        error => console.error(error)
      );*/
  }
}
