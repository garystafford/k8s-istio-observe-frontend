import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ObserveService {

  configUrl = environment.configUrl;

  constructor(private http: HttpClient) {
  }

  getTraces() {
    return this.http.get(this.configUrl, httpOptions);
  }

}
