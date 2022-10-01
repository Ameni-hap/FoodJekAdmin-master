import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurants } from './restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Restaurants[]>('http://localhost:8080/restaurant');
  }

  create(payload: Restaurants) {
    return this.http.post<Restaurants>('http://localhost:8080/restaurant', payload);
  }

  getById(id: number) {
    return this.http.get<Restaurants>(`http://localhost:8080/restaurant/${id}`);
   }
    
   update(payload:Restaurants){
    return this.http.put('http://localhost:8080/restaurant',payload);
   }

   
   delete(id:number){
    return this.http.delete<Restaurants>(`http://localhost:8080/restaurant/${id}`);
 }
}
