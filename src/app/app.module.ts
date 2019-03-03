import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ObserveService } from './observe/observe.service';
import { ObserveComponent } from './observe/observe.component';


@NgModule({
  declarations: [
    AppComponent,
    ObserveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ObserveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
