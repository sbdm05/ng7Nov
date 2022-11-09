import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    // altGr7 pour les template strings
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }

  // getter
  get collection(): Observable<Order[]> {
    return this.collection$;
  }

  // setter
  set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  // méthode pour ajouter un objet
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders/`, item);
  }

  // créer une méthode pour retrouver un objet par ID
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  // créer une méthode pour modifier avec put
  public update(obj: Order): Observable<Order>{
    return this.http.put<Order>(`${this.urlApi}/orders/${obj.id}`, obj);
  }

}
