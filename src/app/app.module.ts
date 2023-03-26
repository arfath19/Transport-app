import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { FormScreenComponent } from './form-screen/form-screen.component';
import { GridScreenComponent } from './grid-screen/grid-screen.component';
import { RateScreenComponent } from './rate-screen/rate-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    FormScreenComponent,
    GridScreenComponent,
    RateScreenComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
