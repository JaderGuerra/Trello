import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from '../models/usuario-model';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  userToken:string;

/* 

https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
*/

private url = "https://identitytoolkit.googleapis.com/v1/accounts:"
private token = "AIzaSyBJHVw6RZJRiOWw4o1VQJy_28n-lFIIek8"

  constructor(private http:HttpClient) { 
    this.leerToken()
  }

  login(usuario:UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken:true
    }

   return this.http.post(`${this.url}signInWithPassword?key=${this.token}`,authData).pipe(
     map((resp) => {
       this.guardarToken(resp['idToken'])
       return resp
     })
   )
  }

  nuevoUsuario(usuario:UsuarioModel){
    const authData = {...usuario,
      returnSecureToken:true}
      return this.http.post(`${this.url}signUp?key=${this.token}`,authData).pipe(
        map((resp) => {
        this.guardarToken(resp['idToken'])
          return resp
      })
      )
  }

  logout() {
    localStorage.removeItem('token')
  }

 private guardarToken(idToken:string){
  this.userToken = idToken
  localStorage.setItem('token',idToken)
  }

  leerToken(){
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token')
    }
    else{
      this.userToken = '';
    }
  }
  

  estaAutenticado():boolean{
    return this.userToken.length >2
  }
}
