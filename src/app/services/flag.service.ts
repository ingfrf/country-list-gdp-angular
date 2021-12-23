import {Injectable} from '@angular/core';
import {flagUrl} from './service-constants';

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  private url = flagUrl;

  constructor() {
  }

  getFlag(code2: string) {
    const flag = code2.toLowerCase();
    return `${this.url}${flag}.png`;
  }

  getDefaultFlag() {
    return `${this.url}un.png`;
  }

}
