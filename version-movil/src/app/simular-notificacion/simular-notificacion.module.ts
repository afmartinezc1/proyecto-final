import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimularNotificacionPageRoutingModule } from './simular-notificacion-routing.module';

import { SimularNotificacionPage } from './simular-notificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimularNotificacionPageRoutingModule
  ],
  declarations: [SimularNotificacionPage]
})
export class SimularNotificacionPageModule {}
