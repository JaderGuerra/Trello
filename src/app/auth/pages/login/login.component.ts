import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

export class LoginComponent implements OnInit {
   formLogin:FormGroup;
  constructor(public fb:FormBuilder,private router:Router,
              private auth:FirebaseService) {
  
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
   
     if (this.formLogin.invalid) {
      return 
    }

    this.auth.login(this.formLogin.value).subscribe((resp) => {
      
      this.router.navigateByUrl('/tablas')
    })
      
    
    
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
