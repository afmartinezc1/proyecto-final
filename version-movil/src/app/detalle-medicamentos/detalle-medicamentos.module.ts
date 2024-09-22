import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleMedicamentosPageRoutingModule } from './detalle-medicamentos-routing.module';

import { DetalleMedicamentosPage } from './detalle-medicamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleMedicamentosPageRoutingModule
  ],
  declarations: [DetalleMedicamentosPage]
})
export class DetalleMedicamentosPageModule {}
