import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { UpperPipe } from './upper.pipe';
import { TimeComponent } from './time/time.component';
import { TimePipe } from './time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    UpperPipe,
    TimeComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
