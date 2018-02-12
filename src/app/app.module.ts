import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './resaltar.directive';
import { ContarClicksDirective } from './contar-clicks.directive';
import {Routes,RouterModule} from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';

const appRoutes: Routes = [
  {path:'',component:AppComponent},
  {path:'lugares',component:AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent
    
  
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYDgeq7YTXz46EscTZ_DzypJ64CiPP_Nk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
