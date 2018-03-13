import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  lat: number = 4.6;
  lng: number = -74.0;
  lugares  = null;

  ngOnInit() {
  }
  constructor(private lugaresService: LugaresService){
    lugaresService.getLugares().valueChanges()
      .subscribe(lugares=> {
        this.lugares = lugares;
      })

  }

}
