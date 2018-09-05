import { Component, OnInit} from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  /*animations: [
    trigger('contenedorAnimable', [
      state('inicial',
        style({opacity:0})),
      state('final',
        style({opacity:1})),
      transition('inicial => final', animate(2000)),
      transition('final => inicial', animate(1000)),
    ])]*/
})
export class LugaresComponent implements OnInit {

  lat: number = 45.5;
  lng: number = -73.6;
  lugares  = null;
  state = 'inicial';

  ngOnInit() {
  }
  constructor(private lugaresService: LugaresService){
    lugaresService.getLugares().valueChanges()
      .subscribe(lugares=> {
        this.lugares = lugares;
        this.state = 'final';
      })
    
  }

  animacionInicia(e){
    console.log(e);
  }
  animacionTermina(e){
    console.log('Terminado');
    console.log(e);

  }

}
