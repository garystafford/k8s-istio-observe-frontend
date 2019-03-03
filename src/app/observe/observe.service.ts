import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class ObserveService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://service-a:8100/ping';
  // configUrl = 'http://localhost:8100/ping';

  getTraces() {
    return this.http.get(this.configUrl, httpOptions);
  }

}
