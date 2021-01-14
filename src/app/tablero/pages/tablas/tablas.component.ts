import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/auth/services/formulario.service';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {

   titulos:any [] = [
    {nombre:'Cosas que hacer'},
    {nombre:'Hecho'},
    {nombre:'En proceso'} 
  ]

  constructor(public auth:FirebaseService, private router:Router) { }

  ngOnInit(): void {
  }

  salir(){
    this.auth.logout()
    this.router.navigateByUrl('/home')
  }


}
