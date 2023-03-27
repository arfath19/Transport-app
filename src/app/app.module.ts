import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { FormScreenComponent } from './form-screen/form-screen.component';
import { GridScreenComponent } from './grid-screen/grid-screen.component';
import { RateScreenComponent } from './rate-screen/rate-screen.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { CellRenderer } from './grid-screen/cell-renderer.component';
import { AddButtonRenderer } from './grid-screen/add-row-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormScreenComponent,
    GridScreenComponent,
    RateScreenComponent,
    CellRenderer,
    AddButtonRenderer
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
