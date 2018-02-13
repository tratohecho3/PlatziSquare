import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  lugares: any = 
  [{id:1,plan:"pagado", cercania:1, distancia:2, active: true, nombre:"lol",descripcion: "Descripcion 1"},
  {id:2,plan:"gratuito", cercania:2, distancia:7, active: true, nombre:"lol2",descripcion: "Descripcion 2"},
  {id:3,plan:"gratuito", cercania:3, distancia:10, active: false, nombre:"lol3",descripcion: "Descripcion 3"}];

  id = null;
  lugar:any = {}

  constructor(private route: ActivatedRoute) { 
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.buscar_Lugar();
  }
  buscar_Lugar(){
    return this.lugares.filter((lugar)=>lugar.id == this.id)[0] || null;

  }

  ngOnInit() {
  }

}
