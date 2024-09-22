import { AsyncPipe, NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Observable, Observer } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu'
import { Router } from '@angular/router';

export interface TabInfo {
  label: string;
  content: boolean;
}

interface Medication {
  medicamento: string;
  dias: string;
  cantidadTomas: number;
  horas: string;
}

@Component({
  selector: 'app-listar-alarmas',
  standalone: true,
  imports: [MatTabsModule, AsyncPipe, MatButtonModule, MatIconModule, MatTableModule, MatPaginatorModule, NgIf, MatCardModule, MatListModule, MatMenuModule],
  templateUrl: './listar-alarmas.component.html',
  styleUrl: './listar-alarmas.component.scss'
})
export class ListarAlarmasComponent {

  displayedColumns: string[] = ['medicamento', 'dias', 'cantidadTomas', 'horas', 'acciones'];
  isAnimationDone: boolean = false;

  medications: Medication[] = [
    { medicamento: 'Fluticasona', dias: 'Todos los días', cantidadTomas: 2, horas: '2:00 pm' },
    { medicamento: 'Mometasona', dias: 'Lun, Mier, Vier', cantidadTomas: 3, horas: '8:00 am' },
    { medicamento: 'Glucotrol', dias: 'Sab, Dom', cantidadTomas: 4, horas: '12:00 pm' }
  ];

  asyncTabs: Observable<TabInfo[]>;

  selectedTabIndex: number = 0;

  constructor(private router: Router) {
    this.asyncTabs = new Observable((observer: Observer<TabInfo[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Ordenes medicas', content: true},
          {label: 'Alarmas individuales', content: false},
        ]);
      }, 1000);
    });
  }

  onTabChanged(index: number): void {
    this.selectedTabIndex = index;
    this.isAnimationDone = false;
  }

  onAnimationDone() {
    this.isAnimationDone = true;
  }

  goRecordatorioOrden() {
    this.router.navigate(['/', 'crear-recordatorio-orden']);
  }

}
