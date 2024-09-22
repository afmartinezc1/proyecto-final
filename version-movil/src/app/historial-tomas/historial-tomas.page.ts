import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

export interface Toma {
  hora: string;
  estado: string;
}

export interface Dia {
  fecha: string;
  tomas: Toma[];
}

@Component({
  selector: 'app-historial-tomas',
  templateUrl: './historial-tomas.page.html',
  styleUrls: ['./historial-tomas.page.scss'],
})
export class HistorialTomasPage implements OnInit {

  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
  }

  goBack() { this.routerOutlet.pop(); }

  historial: Dia[] = [
    {
      fecha: 'Hoy',
      tomas: [
        { hora: '7:00 am', estado: 'Toma confirmada' },
        { hora: '8:00 pm', estado: 'Sin tomar' }
      ]
    },
    {
      fecha: 'Ayer',
      tomas: [
        { hora: '7:00 am', estado: 'Pospuesta' },
        { hora: '8:00 pm', estado: 'Pospuesta' }
      ]
    },
    {
      fecha: 'Martes, Ago 15',
      tomas: [
        { hora: '7:00 am', estado: 'Toma confirmada' },
        { hora: '8:00 pm', estado: 'Toma confirmada' }
      ]
    }
  ];
}
