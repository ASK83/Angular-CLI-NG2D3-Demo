import { NgModule } from '@angular/core';
import { NgxChartsModule } from 'ngx-charts';

import { CustomChartComponent } from './custom.component';

@NgModule({
  declarations: [
    CustomChartComponent
  ],
  imports: [
    NgxChartsModule
  ],
  exports: [
    CustomChartComponent
  ],
  providers: []
})
export class CustomChartModule { }
