import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class LugaresService {
  lugares: any = 
  [{id:1,plan:"pagado", cercania:1, distancia:2, active: true, nombre:"lol"},
  {id:2,plan:"gratuito", cercania:2, distancia:7, active: true, nombre:"lol2"},
  {id:3,plan:"gratuito", cercania:3, distancia:10, active: false, nombre:"lol3"}];
  
  constructor(private afDB: AngularFireDatabase) { }

  public getLugares(){
    return this.lugares;
  }
  public buscar_Lugar(id){
    return this.lugares.filter((lugar)=>lugar.id == id)[0] || null;

  }

  public guardarLugar(lugar){
    console.log(lugar); 
    this.afDB.database.ref('lugares/1').set(lugar);

  }
}
