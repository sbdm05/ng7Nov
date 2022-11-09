import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-clients',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss'],
})
export class PageEditClientComponent implements OnInit {
  item!: Client;
  item$!: Observable<Client>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientsService: ClientsService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // appel vers le service getItemById
    this.item$ = this.clientsService.getItemById(id);
  }

  ngOnInit(): void {}

  onEdit(item: Client) {
    // accéder à update
    this.clientsService.update(item).subscribe(() => {
      // redirection
      this.router.navigate(['clients']);
    });
  }
}
