import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-detalle-medicamentos',
  templateUrl: './detalle-medicamentos.page.html',
  styleUrls: ['./detalle-medicamentos.page.scss'],
})
export class DetalleMedicamentosPage implements OnInit {

  constructor( private routerOutlet: IonRouterOutlet, private router: Router) { }

  ngOnInit() {
  }

  goBack() { this.routerOutlet.pop(); }

  goToMedicamentos() {
    this.router.navigate(['/', 'historial-tomas']);
  }

}
