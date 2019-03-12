import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {environment} from '../../environments/environment';
import {Trace} from './Trace';
import {NGXLogger} from 'ngx-logger';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ObserveService {

  // configUrlTmp = environment.configUrl;

  constructor(private _http: HttpClient, private _logger: NGXLogger) {
  }

  getTraces(apiURL) {
    this._logger.debug('apiURL:', apiURL);
    this._logger.debug('httpOptions:', httpOptions);

    return this._http.get<Trace[]>(apiURL, httpOptions);
  }

}
