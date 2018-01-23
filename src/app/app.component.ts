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
  lugares: any = 
  [{plan:"pagado", cercania:1, distancia:2, active: true, nombre:"lol"},
  {plan:"gratuito", cercania:2, distancia:7, active: true, nombre:"lol2"},
  {plan:"gratuito", cercania:3, distancia:10, active: false, nombre:"lol3"}];
  lat: number = 4.6;
  lng: number = -74.0;




  constructor(){
    setTimeout(() =>{
      this.listo = true;
    },3000)
  }

  hacerAlgo(){
    alert('haciendo algo');
  }
}
