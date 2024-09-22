import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialTomasPage } from './historial-tomas.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialTomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialTomasPageRoutingModule {}
