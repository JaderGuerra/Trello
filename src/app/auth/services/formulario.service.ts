import { Injectable } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})
export class FormularioService {

    // formLogin:FormGroup;

 /*  constructor(public fb:FormBuilder,private router:Router) { 
    // this.createForm()
  } */

   /* createForm(){
    this.formLogin  = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  } */

  /* login():boolean{
   
     if (this.formLogin.invalid) {
      return false
    }else if(this.formLogin.get('email').value == "swilor29@gmail.com"){
      this.router.navigateByUrl('/tablas')
      return true
    } 
    // this.formLogin.get('email').value == "swilor29@gmail.com"
  } */

 /* isInvalid(campo:string):boolean{
    return (this.formLogin.get(campo).touched && 
            this.formLogin.get(campo).invalid )
  }

    mostrarError(campo:string):string{
    let mensajeError:string;

    if (this.formLogin.get(campo).errors?.required) {
      mensajeError = "Email Es Obligatorio"
    }
    else if (this.formLogin.get(campo).hasError('email')) {
      mensajeError = "Email invalido"
    }
    else if (this.formLogin.get(campo).hasError('minlength')) {
      const minLength = this.formLogin.get(campo).errors?.minlength.requiredLength;
      mensajeError = `minimo ${minLength} caracteres`
    }
    return mensajeError
  } */

}
