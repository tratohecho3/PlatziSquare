import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './resaltar.directive';
import { ContarClicksDirective } from './contar-clicks.directive';
import {Routes,RouterModule} from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { CrearComponent } from './crear/crear.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';

const appRoutes: Routes = [
  {path:'',component:LugaresComponent},
  {path:'lugares',component:LugaresComponent},
  {path:'detalle/:id',component:DetalleComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'crear/:id',component:CrearComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe
    
  
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYDgeq7YTXz46EscTZ_DzypJ64CiPP_Nk'
    }),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
