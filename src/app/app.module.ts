import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {AppComponent} from './app.component';
import {ObserveService} from './observe/observe.service';
import {ObserveComponent} from './observe/observe.component';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ObserveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LoggerModule.forRoot({
      level: !environment.production ? NgxLoggerLevel.DEBUG : NgxLoggerLevel.INFO,
      serverLogLevel: NgxLoggerLevel.INFO
    })
  ],
  providers: [ObserveService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
