import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablasRoutingModule } from './tablas-routing.module';
import { TablasComponent } from './tablas.component';


@NgModule({
  declarations: [TablasComponent],
  imports: [
    CommonModule,
    TablasRoutingModule
  ]
})
export class TablasModule { }
