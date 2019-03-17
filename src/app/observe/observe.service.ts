import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Greeting} from './Greeting';
import {NGXLogger} from 'ngx-logger';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ObserveService {
  constructor(private _http: HttpClient, private _logger: NGXLogger) {
  }

  getGreetings(apiURL) {
    this._logger.debug('apiURL:', apiURL);
    this._logger.debug('httpOptions:', httpOptions);

    return this._http.get<Greeting[]>(apiURL, httpOptions);
  }

}
