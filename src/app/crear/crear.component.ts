import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';

//import swal from 'sweetalert2';
const swal = require('sweetalert2');
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  lugar:any = {};
  id: any = null;
  constructor(private lugaresService: LugaresService,private route: ActivatedRoute) { 
    this.id = this.route.snapshot.params['id'];
    if(this.id != 'new'){
      this.lugaresService.getLugar(this.id).valueChanges()
        .subscribe(lugar => {
          this.lugar = lugar;
        })
        }
  }

  ngOnInit() {
  }
  
  guardarLugar(){
    let direccion = this.lugar.calle + "," + this.lugar.ciudad + "," + this.lugar.pais;
    this.lugaresService.obtenerGeoData(direccion)
      .subscribe(result => {
        
        this.lugar.lat  = result.json().results[0].geometry.location.lat;
        this.lugar.lng = result.json().results[0].geometry.location.lng;
     

        if(this.id != 'new'){
          this.lugaresService.editarLugar(this.lugar);
          swal(
            'Negocio editado con exito!',
            'Sigue disfrutando la pagina!',
            'success'
          )
          
        }
        else {
          this.lugar.id = Date.now();
          this.lugaresService.guardarLugar(this.lugar);
          swal(
            'Negocio guardado con exito!',
            'Sigue disfrutando la pagina!',
            'success'
          )
        }

        this.lugar = {};

      });

  }

}
