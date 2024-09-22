import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimularNotificacionPage } from './simular-notificacion.page';

const routes: Routes = [
  {
    path: '',
    component: SimularNotificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimularNotificacionPageRoutingModule {}
