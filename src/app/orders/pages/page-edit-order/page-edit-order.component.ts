import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  // rechercher l'order et le stocker dans item
  // utiliser activatedRoute pour extraire un paramètre de la route

  public item$!: Observable<Order>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    // on obtient l'id de l'url
    // const = variable qui ne change pas
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(typeof id); // number

    // faire appel à une méthode dans le service getItemById(id)

    // option 1 avec subscribe
    // this.ordersService.getItemById(id).subscribe((data) => {
    //   // console.log(data);
    //   this.item = data;
    // });

    // option 2 - utilisation du pipe Async
    // créer une variable avec le $
    // stocker à l'intérieur de this.item$ = this.ordersService.getItemById(id)
    this.item$ = this.ordersService.getItemById(id);
  }

  ngOnInit(): void {}

  public onEdit(obj: Order) {
    // à faire : appel vers service
    console.log(obj, 'obj modifié  ');
    // créer une méthode dans le service update avec l'obj
    // redirection avec Router
    this.ordersService.update(obj).subscribe(() => {
      // redirection
      this.router.navigate(['orders']);
    });
  }
}
