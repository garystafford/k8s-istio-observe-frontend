import {Component, OnInit} from '@angular/core';
import {ObserveService} from './observe.service';
import {NGXLogger} from 'ngx-logger';
import {Greetings} from './Greetings';

@Component({
    selector: 'app-observe',
    templateUrl: './observe.component.html',
    styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {

    public greetings: Greetings;
    public apiURL: string;
    public apiURLFull: string;
    public timingMessage: string;
    private _timing: number;

    constructor(private _service: ObserveService, private _logger: NGXLogger) {
    }

    ngOnInit() {
        this.apiURL = 'api.dev.example-api.com';
        this.apiURLFull = 'http://' + this.apiURL + '/api/ping';
    }

    changeApiUrl() {
        this.apiURLFull = 'http://' + this.apiURL + '/api/ping';
        this._logger.info('apiURLFull:', this.apiURLFull);

        const start = new Date().getTime();
        this._service.getGreetings(this.apiURLFull).subscribe(
            data => {
                this.greetings = data;
                this._logger.info('greetings:', this.greetings);

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
