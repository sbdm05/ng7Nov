import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss'],
})
export class PageAddClientComponent implements OnInit {
  public item = new Client();

  constructor(private clientsService: ClientsService, private router: Router) {}

  ngOnInit(): void {}

  onAction(item: Client) {
    console.log(item, 'déclenché dans parent');
    // appelé service pour http.post
    this.clientsService.add(item).subscribe((data) => console.log(data));
    // rediriger
    this.router.navigate(['clients']);
  }
}
