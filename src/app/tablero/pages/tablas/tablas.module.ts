import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablasRoutingModule } from './tablas-routing.module';
import { TablasComponent } from './tablas.component';
import { TableroCardComponent } from '../../components/tablero-card/tablero-card.component';
import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TablasComponent, TableroCardComponent],
  imports: [
    CommonModule,
    TablasRoutingModule,ReactiveFormsModule
  ]
})
export class TablasModule { }
