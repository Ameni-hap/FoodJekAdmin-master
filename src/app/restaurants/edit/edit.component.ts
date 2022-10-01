import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurants } from '../restaurants';
import{RestaurantsService} from '../restaurants.service'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  RestaurantForm: Restaurants = {
    id: 0,
    name: '',
    imageUrl: '',
    adresse: '',
    phone: '',
   };

  constructor(
    private route: ActivatedRoute,
    private restaurantsService:RestaurantsService,
    private router:Router,
    ) { }

  ngOnInit(): void {

//    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.restaurantsService.getById(id).subscribe((data) => {
      this.RestaurantForm = data;
    });
  }

  update() {
    this.restaurantsService.update(this.RestaurantForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/restaurants/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
