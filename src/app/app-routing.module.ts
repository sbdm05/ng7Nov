import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from './clients/pages/page-list-clients/page-list-clients.component';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  // définir toutes nos routes
  // définir la route d'accueil
  // quand utilisateur arrive sur '', on est redirigé vers orders
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  // quand on arrive sur orders, on affiche le composant
  // gestion de la route introuvable **
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then(
        (m) => m.ClientsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    // accèder à .config
    console.log(this.router.config, 'tableau de routes');
  }
}
