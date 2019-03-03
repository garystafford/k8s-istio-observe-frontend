import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ObserveService {

  constructor(private http: HttpClient) { }

  configUrl = environment.configUrl;

  getTraces() {
    return this.http.get(this.configUrl, httpOptions);
  }

}
