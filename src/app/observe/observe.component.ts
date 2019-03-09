import {Component, OnInit} from '@angular/core';
import {ObserveService} from './observe.service';
import {Trace} from './Trace';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {

  public traces: Trace[];
  private apiURL: string;
  private apiURLFull: string;

  constructor(private _service: ObserveService) {
  }

  ngOnInit() {
    this.apiURL = 'api.dev.example-api.com';
  }

  changeApiUrl() {
    this.apiURLFull = 'http://' + this.apiURL + '/api/ping';
    this._service.getTraces(this.apiURLFull).subscribe(
      data => {
        this.traces = data;
        console.log(this.traces);
      },
      err => console.log(err),
      () => console.log('Done loading traces')
    );
  }
}
