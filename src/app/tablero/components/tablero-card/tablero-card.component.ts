import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  fTablas:FormGroup;

  constructor(private fb:FormBuilder ) {
    this.createForm()
   }

  ngOnInit(): void {}

  createForm(){
    this.fTablas = this.fb.group({
      item:['',[Validators.required]]
    })
  }
 
  addTask(){
    if (this.fTablas.invalid) {
      return
    }
    let valor = this.fTablas.get('item').value.trim()
    this.tareas.push(new Tarea (valor))
    this.fTablas.reset()
  }

}
