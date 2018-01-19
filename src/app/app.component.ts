import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PLatziSquare';
  a = 3;
  b = 5;
  listo = false;
  nombre = "Daniel";



  constructor(){
    setTimeout(() =>{
      this.listo = true;
    },3000)
  }

  hacerAlgo(){
    alert('haciendo algo');
  }
}
