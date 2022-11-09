import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormClientComponent } from './components/form-client/form-client.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListClientsComponent,
    PageAddClientComponent,
    PageEditClientComponent,
    FormClientComponent,
  ],
  imports: [CommonModule, ClientsRoutingModule, ReactiveFormsModule, SharedModule],
})
export class ClientsModule {}
