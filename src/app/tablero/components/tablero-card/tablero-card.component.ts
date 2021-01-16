import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea-interface';


@Component({
  selector: 'app-tablero-card',
  templateUrl: './tablero-card.component.html',
  styleUrls: ['./tablero-card.component.css']
})
export class TableroCardComponent implements OnInit {

  @Input() titulos:any[]

  show:boolean = true;
  tareas:Tarea[] = [];
  tarea:Tarea = new Tarea();

  constructor( ) { }

  ngOnInit(): void {}

 
  addTask(){

  }

}
