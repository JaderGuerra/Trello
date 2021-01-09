import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomecomponentsModule } from '../../components/homecomponents.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,HomecomponentsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
