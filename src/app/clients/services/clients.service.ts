import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from 'src/app/core/models/client';

// décorateur
@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  // urlAPI
  private urlApi = environment.urlApi;

  //private collection$!: Observable<Client[]>;
  private collection$!: Observable<Client[]>;

  constructor(private http: HttpClient) {
    console.log('depuis service');
    this.collection = this.http.get<Client[]>(`${this.urlApi}/clients`);
  }

  // on va appeler cette fonction this.orderService.collection
  // getter
  get collection(): Observable<Client[]> {
    return this.collection$;
  }

  // setter
  set collection(col: Observable<Client[]>) {
    this.collection$ = col;
  }

  public update(item: Client): Observable<Client> {
    // appel http
    return this.http.put<Client>(`${this.urlApi}/clients/${item.id}`, item);
  }

  public add(item: Client): Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}/clients`, item);
  }

  public getItemById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.urlApi}/clients/${id}`);
  }
}
