import { Component, OnInit } from '@angular/core';
import {ObserveService} from "./observe.service";

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {

  public traces;

  constructor(private _service: ObserveService) { }

  ngOnInit() {
    this._service.getTraces().subscribe(
      data => { this.traces = data; console.log(this.traces) },
      err => console.log(err),
      () => console.log('Done loading traces')
    )
  }

}
