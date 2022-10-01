import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plates } from './plates';

@Injectable({
  providedIn: 'root'
})
export class PlatesService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Plates[]>("http://localhost:8080/plate");
  }

  create(payload: Plates) {
    return this.http.post<Plates>("http://localhost:8080/plate", payload);
    
  }

 

  
}
