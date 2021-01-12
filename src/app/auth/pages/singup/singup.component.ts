import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { UsuarioModel } from 'src/app/shared/models/usuario-model';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  formSingup:FormGroup;
   

  constructor(public fb:FormBuilder,private auth:FirebaseService
            ,private router:Router) {
    this.createForm()
   }

  ngOnInit(): void {  
     
  }

  createForm(){
    this.formSingup  = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      nombre:['',[Validators.required,Validators.minLength(6)]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }


  isInvalid(campo:string):boolean{
    return (this.formSingup.get(campo).touched && 
            this.formSingup.get(campo).invalid )
  }

    mostrarError(campo:string):string{
    let mensajeError:string;

    if (this.formSingup.get(campo).errors?.required) {
      mensajeError = "Campo Obligatorio"
    }
    else if (this.formSingup.get(campo).hasError('email')) {
      mensajeError = "Email invalido"
    }
    else if (this.formSingup.get(campo).hasError('minlength')) {
      const minLength = this.formSingup.get(campo).errors?.minlength.requiredLength;
      mensajeError = `minimo ${minLength} caracteres`
    }
    return mensajeError
  }

  login(){

    if (this.formSingup.invalid) {
      return
    }
    else{

          this.auth.nuevoUsuario(this.formSingup.value).subscribe((usuario) => {
        // console.log(usuario); 
        this.router.navigateByUrl('/tablas')
      })   
    }

  }

}
