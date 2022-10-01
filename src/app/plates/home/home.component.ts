import { Component, OnInit } from '@angular/core';
import { Plates } from '../plates';
import { PlatesService } from '../plates.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allPlates: Plates[] = [];

  constructor(private  platesService: PlatesService ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.platesService.get().subscribe((data) => {
      this.allPlates = data;
    });
  }

}
