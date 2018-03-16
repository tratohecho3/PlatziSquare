import { Component, OnInit, trigger, state, style, transition } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { animate } from '@angular/animations';

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

  lat: number = 4.6;
  lng: number = -74.0;
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
