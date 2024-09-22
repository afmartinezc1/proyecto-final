import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMedicamentosPage } from './detalle-medicamentos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleMedicamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMedicamentosPageRoutingModule {}
