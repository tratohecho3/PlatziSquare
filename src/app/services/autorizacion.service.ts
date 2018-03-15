import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth/auth";

@Injectable()
export class AutorizacionService {
  
  constructor(private angularFireAuth: AngularFireAuth) { }

  public login(email:string ,password:string){
    console.log('login');
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
}
