import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NG2D3Module } from 'ng2d3';
import { CustomChartModule } from './custom-chart/custom.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NG2D3Module,
    CustomChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
