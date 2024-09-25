import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.page.html',
  styleUrls: ['./detalle-orden.page.scss'],
})
export class DetalleOrdenPage implements OnInit {

  constructor(private routerOutlet: IonRouterOutlet, private router: Router) { }

  ngOnInit() {
  }

  goBack() { this.routerOutlet.pop(); }

  goDetalle() {
    this.router.navigate(['/', 'detalle-medicamentos']);
  }

}
