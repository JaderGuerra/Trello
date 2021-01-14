import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero-card',
  templateUrl: './tablero-card.component.html',
  styleUrls: ['./tablero-card.component.css']
})
export class TableroCardComponent implements OnInit {

  @Input() titulos:any[]

  constructor() { }

  ngOnInit(): void {}

}
