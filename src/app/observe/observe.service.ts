import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Trace} from './Trace';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ObserveService {

  configUrlTmp = environment.configUrl;

  constructor(private http: HttpClient) {
  }

  getTraces(apiURL) {
    return this.http.get<Trace[]>(apiURL, httpOptions);
  }

}
