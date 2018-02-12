import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  title = 'PLatziSquare';
  a = 3;
  b = 5;
  listo = false;
  nombre = "Daniel";
  lugares: any = 
  [{id:1,plan:"pagado", cercania:1, distancia:2, active: true, nombre:"lol"},
  {id:2,plan:"gratuito", cercania:2, distancia:7, active: true, nombre:"lol2"},
  {id:3,plan:"gratuito", cercania:3, distancia:10, active: false, nombre:"lol3"}];
  lat: number = 4.6;
  lng: number = -74.0;


  ngOnInit() {
  }
  constructor(){

  }

}
