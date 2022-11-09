import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  // créer un nouvel objet pour le passer au form
  public item: Order = new Order();

  constructor(private router: Router, private ordersService: OrdersService) {}

  ngOnInit(): void {}

  public onAdd(obj: Order) {
    console.log(obj, 'depuis page-add-order');
    // appel vers la méthode add dans le service
    // redirection (Router)
    this.ordersService.add(obj).subscribe(() => {
      // redirection
      this.router.navigate(['orders']);
    });
  }
}
