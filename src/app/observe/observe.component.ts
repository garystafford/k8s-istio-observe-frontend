import {Component, OnInit} from '@angular/core';
import {ObserveService} from './observe.service';
import {Trace} from './Trace';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {

  public traces: Trace[];
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
    this._service.getTraces(this.apiURLFull).subscribe(
      data => {
        this.traces = data;
        this._logger.debug('traces:', this.traces);
      },
      err => this._logger.error(err.message),
      () => {
        const t1 = performance.now();
        return this._logger.info('Call to getTraces took ' + (t1 - t0).toFixed(2) + ' ms');
      }
    );

  }
}
