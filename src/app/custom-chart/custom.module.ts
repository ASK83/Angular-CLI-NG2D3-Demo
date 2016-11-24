import { NgModule } from '@angular/core';
import { NG2D3Module } from 'ng2d3';

import { CustomChartComponent } from './custom.component';

@NgModule({
  declarations: [
    CustomChartComponent
  ],
  imports: [
    NG2D3Module
  ],
  exports: [
    CustomChartComponent
  ],
  providers: []
})
export class CustomChartModule { }
