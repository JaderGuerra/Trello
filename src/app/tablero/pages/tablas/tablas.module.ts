import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablasRoutingModule } from './tablas-routing.module';
import { TablasComponent } from './tablas.component';
import { TableroCardComponent } from '../../components/tablero-card/tablero-card.component';


@NgModule({
  declarations: [TablasComponent,TableroCardComponent],
  imports: [
    CommonModule,
    TablasRoutingModule
  ]
})
export class TablasModule { }
