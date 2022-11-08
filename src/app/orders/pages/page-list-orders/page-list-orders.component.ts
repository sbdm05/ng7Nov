import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public collection$!: Observable<Order[]>;

  // ici tableau de string
  public headers: string[] = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  constructor(private ordersService: OrdersService, private router: Router) {
    // this.ordersService.collection.subscribe(function(data){
    //   console.log(data);
    // });
    // this.ordersService.collection.subscribe((data) => {
    //   console.log(data);
    //   this.collection = data;
    // });

    // stockage de l'observable pour utilisation du pipe async dans l'HTML
    this.collection$ = this.ordersService.collection;
  }

  // créer une méthode pour faire le calcul totalHt/ totalTTC
  // remplacée par le pipe total
  // public total(val: number, coef: number, tva?: number): number {
  //   console.log('total called');
  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }

  public goToEdit(id: number) {
    console.log('cliqué', id);
    // rediriger vers la page edit en passant l'id
    // route orders/edit/4
    this.router.navigate(['orders', 'edit', id]);
  }

  ngOnInit(): void {}
}
