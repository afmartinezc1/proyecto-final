import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificarTomaPageRoutingModule } from './notificar-toma-routing.module';

import { NotificarTomaPage } from './notificar-toma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificarTomaPageRoutingModule
  ],
  declarations: [NotificarTomaPage]
})
export class NotificarTomaPageModule {}
