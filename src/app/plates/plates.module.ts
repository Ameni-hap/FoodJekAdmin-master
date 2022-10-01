import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatesRoutingModule } from './plates-routing.module';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
   
  ],
  imports: [
    CommonModule,
    PlatesRoutingModule,
    FormsModule
  ]
})
export class PlatesModule { }
