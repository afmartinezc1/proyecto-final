import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
  }

  goBack() { this.routerOutlet.pop(); }
}
