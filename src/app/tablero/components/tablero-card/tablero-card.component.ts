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
  note = { id:null, taskItem:null}
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

  deleteTask(tarea:Tarea){
    this.tareas = this.tareas.filter((resp) => resp !== tarea )
  }

  editTask(tarea:Tarea){
      this.getValueTask(tarea)
  }

  getValueTask(tarea:Tarea){
  this.fTablas.patchValue({
    item:tarea.taskItem
  })
  this.sendControllsEdit()
}

 sendControllsEdit(){

  /* this.fTablas.setValue({
    item:"Jader"
  }) */
  /* 
  estaba esta
  this.fTablas.valueChanges.subscribe( (value) => {
    console.log( value.item) 
  })  */

  /* this.tareas.map((resp) => {
    console.log(resp);
  }) */
   /*  this.fTablas.valueChanges.subscribe((value) => {
     this.tareas.
     console.log(value);
  }) */ 
  /* this.tareas.find(() => {
    
  }) */
  
 }

}