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
    this.apiURL = 'localhost';
  }

  changeApiUrl() {
    this.apiURLFull = 'http://' + this.apiURL + '/api/ping';
    this._logger.info('apiURLFull:', this.apiURLFull);

    this._service.getTraces(this.apiURLFull).subscribe(
      data => {
        this.traces = data;
        this._logger.info('traces:', this.traces);
      },
      err => this._logger.error(err),
      () => this._logger.info('Done loading traces')
    );
  }
}
