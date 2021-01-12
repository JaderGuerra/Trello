import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;

  constructor(private fb:FormBuilder) {
    this.createForm()
   }

  ngOnInit(): void {}

  createForm(){
    this.formLogin  = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  login():boolean{
    console.log(this.formLogin.value)
    if (this.formLogin.invalid) {
      return false
    }else if(this.formLogin.get('email').value == "swilor29@gmail.com"){
      return true
    }

  }

  isInvalid(campo:string):boolean{
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
  }

}
