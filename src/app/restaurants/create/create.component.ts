import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurants } from '../restaurants';
import{RestaurantsService} from '../restaurants.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  RestaurantForm: Restaurants = {
   id: 0,
   name: '',
   imageUrl: '',
   adresse: '',
   phone: '',
  };


  constructor(private restaurantsService:RestaurantsService,
    private router:Router) { }

  ngOnInit(): void {
  }

  create(){
    this.restaurantsService.create(this.RestaurantForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/restaurants/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
