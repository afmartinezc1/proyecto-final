import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.page.html',
  styleUrls: ['./detalle-orden.page.scss'],
})
export class DetalleOrdenPage implements OnInit {

  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
  }

  goBack() { this.routerOutlet.pop(); }

}
