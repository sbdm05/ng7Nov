import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  private collection$ !: Observable<Order[]>

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>('http://localhost:5000/orders');
  }

  // getter
  get collection(): Observable<Order[]>{
    return this.collection$;
  }

  // setter
  set collection(col: Observable<Order[]>){
    this.collection$= col
  }
}
