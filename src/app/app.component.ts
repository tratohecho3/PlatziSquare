import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn = false;
  user = null;
  constructor(private autorizacionService:AutorizacionService){
    autorizacionService.isLogged()
      .subscribe(result => {
        if(result && result.uid){
          this.loggedIn = true;
          this.user = this.autorizacionService.getUser().currentUser.email;
        }

        else{
          this.loggedIn = false;
        }
      },error=> this.loggedIn = false)
  }

  logout(){
    this.autorizacionService.logout();
  }


}
