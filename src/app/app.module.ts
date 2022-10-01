import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatesModule } from './plates/plates.module';
import {  HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RestaurantsModule } from './restaurants/restaurants.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlatesModule,
    RestaurantsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
