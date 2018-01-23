import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './resaltar.directive';



@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective
    
  
  ],
  imports: [
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
