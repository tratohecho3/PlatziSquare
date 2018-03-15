import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registro: any = {};

  constructor(private  autorizacionService: AutorizacionService) { 
    
  }

  ngOnInit() {
  }

  login(){
    this.autorizacionService.login(this.registro.email,this.registro.password);
  }

  facebookLogin(){
    this.autorizacionService.facebookLogin();
  }

}
