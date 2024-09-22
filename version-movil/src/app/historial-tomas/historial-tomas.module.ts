import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialTomasPageRoutingModule } from './historial-tomas-routing.module';

import { HistorialTomasPage } from './historial-tomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialTomasPageRoutingModule
  ],
  declarations: [HistorialTomasPage]
})
export class HistorialTomasPageModule {}
