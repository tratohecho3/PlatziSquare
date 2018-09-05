import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LugaresService {
  API_ENDPOINT = 'https://platzisquare-410ad.firebaseio.com';

  constructor(private afDB: AngularFireDatabase,private http: Http) { }

  public getLugares(){
    return this.afDB.list('lugares/');
    //return this.http.get(this.API_ENDPOINT+ '/lugares.json');
  }
  public getLugar(id){
    return this.afDB.object('lugares/' + id);
  }


  public guardarLugar(lugar){
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    alert('Business created, now you can go home and see it at the map')
    //const headers = new Headers({"Content-Type":"application/json"});
    //return this.http.post(this.API_ENDPOINT+ '/lugares.json', lugar,{headers:headers}).subscribe();

  }

  public editarLugar(lugar){
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);


  }
  public obtenerGeoData(direccion){

    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);

  }
}
