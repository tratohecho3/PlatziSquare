import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth/auth";
import * as firebase from 'firebase/app';
import {Router} from "@angular/router";

@Injectable()
export class AutorizacionService {
  
  constructor(private angularFireAuth: AngularFireAuth,private router:Router) { 
    this.isLogged();
  }



  public registro(email:string,password:string){

    this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
      .then(response => {
        alert("Usuario Registrado");
        console.log(response);
      })
      .catch(error => {
        alert("Un error ha ocurrido");
        console.log(error);
      })
    console.log('registro');
  }

  public login(email:string ,password:string){

    this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
      .then(response => {
        alert("Usuario Logueado");
        console.log(response);
        this.router.navigate(['lugares']);
      })
      .catch(error => {
        alert("Un error ha ocurrido");
        console.log(error);
      })
    console.log('Login');
  }

  public facebookLogin(){
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(resultado => {
        alert("Usuario Logueado con exito");
        this.router.navigate(['lugares']);
      })
      .catch(error => console.log(error))
  }

  public isLogged(){
    return this.angularFireAuth.authState;
  }

  public logout(){
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['login']);
  }
}
