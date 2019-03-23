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
  public timingMessage;
  private _timing: number;
  private _apiURLFull: string;

  constructor(private _service: ObserveService, private _logger: NGXLogger) {
  }

  ngOnInit() {
    this.apiURL = 'api.dev.example-api.com';
  }

  changeApiUrl() {
    this._apiURLFull = 'http://' + this.apiURL + '/api/ping';
    this._logger.info('apiURLFull:', this._apiURLFull);

    const start = new Date().getTime();
    this._service.getGreetings(this._apiURLFull).subscribe(
      data => {
        this.greetings = data;
        this._logger.debug('greetings:', this.greetings);

        this._timing = (new Date().getTime() - start);
        this.timingMessage = 'Response time: ~' + this._timing + ' ms';
      },
      err => this._logger.error(err.message),
      () => {
        this._logger.info(this.timingMessage);
      }
    );

  }
}
