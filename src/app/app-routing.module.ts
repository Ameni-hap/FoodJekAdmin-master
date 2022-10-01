import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'restaurants/home',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'plates/home',
    pathMatch: 'full',
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
