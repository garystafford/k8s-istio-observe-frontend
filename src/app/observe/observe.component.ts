import {Component, OnInit} from '@angular/core';
import {ObserveService} from './observe.service';
import {Greeting} from './Greeting';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {

  public greetings: Greeting[];
  public apiURL: string;
  private apiURLFull: string;

  constructor(private _service: ObserveService, private _logger: NGXLogger) {
  }

  ngOnInit() {
    this.apiURL = 'api.dev.example-api.com';
  }

  changeApiUrl() {
    this.apiURLFull = 'http://' + this.apiURL + '/api/ping';
    this._logger.info('apiURLFull:', this.apiURLFull);

    const t0 = performance.now();
    this._service.getGreetings(this.apiURLFull).subscribe(
      data => {
        this.greetings = data;
        this._logger.debug('greetings:', this.greetings);
      },
      err => this._logger.error(err.message),
      () => {
        const t1 = performance.now();
        return this._logger.info('Call to getGreetings took ' + (t1 - t0).toFixed(2) + ' ms');
      }
    );

  }
}
