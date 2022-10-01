import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plates } from '../plates';
import { PlatesService } from '../plates.service';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { Restaurants } from 'src/app/restaurants/restaurants';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  //selector: 'select-overview-example',
  //templateUrl: 'select-overview-example.html'
})
export class CreateComponent implements OnInit {
  
  allRestaurants: Restaurants[] = [];
  
  plateForm: Plates = {
    idPlate:0,
    namePlate:'',
    price:0,
    favorite:false,
    stars:0,
    imageUrl:'',  
    cookTime:'',
    idrestaurant:0,
  };
  
  

  constructor(private plateService:PlatesService,
    private restaurantsService:RestaurantsService,
    private router:Router) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  create(){
    this.plateService.create(this.plateForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/plates/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
  getRestaurants() {
    this.restaurantsService.get().subscribe((data) => {
      this.allRestaurants = data;
    });
  }
  }
 
  


