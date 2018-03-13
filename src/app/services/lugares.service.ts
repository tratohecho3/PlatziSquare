import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';

@Injectable()
export class LugaresService {

  constructor(private afDB: AngularFireDatabase,private http: Http) { }

  public getLugares(){
    return this.afDB.list('lugares/');
  }
  /*public buscar_Lugar(id){
    return this.lugares.filter((lugar)=>lugar.id == id)[0] || null;

  }*/

  public guardarLugar(lugar){
    console.log(lugar); 
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);


  }
  public obtenerGeoData(direccion){

    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);

  }
}
