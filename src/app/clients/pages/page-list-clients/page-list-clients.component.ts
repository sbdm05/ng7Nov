import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  titleParent: string = 'Liste des clients';

  public states = Object.values(StateClient);

  public collection$!: Observable<Client[]>;

  headers: string[] = [
    'action',
    'state',
    'tva',
    'id',
    'name',
    'totalCaHt',
    'total TTC',
    'comment',
  ];

  constructor(private clientsService: ClientsService, private router: Router) {
    console.log('service constructor');
    this.collection$ = this.clientsService.collection;
  }

  ngOnInit(): void {}

  goToEdit(item: Client) {
    this.router.navigate(['clients', 'edit', item.id]);
  }
}
