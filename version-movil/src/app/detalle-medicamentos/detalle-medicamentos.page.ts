import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-detalle-medicamentos',
  templateUrl: './detalle-medicamentos.page.html',
  styleUrls: ['./detalle-medicamentos.page.scss'],
})
export class DetalleMedicamentosPage implements OnInit {

  constructor( private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
  }

  goBack() { this.routerOutlet.pop(); }

}
