import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

interface Medication {
  medicamento: string;
  dias: string;
  cantidadTomas: number;
  horas: string;
}
@Component({
  selector: 'app-crear-recordatorio-orden-medica',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatLabel, MatTabsModule, AsyncPipe, MatButtonModule, MatIconModule, MatTableModule, MatPaginatorModule, NgIf, MatCardModule, MatListModule, MatMenuModule],
  templateUrl: './crear-recordatorio-orden-medica.component.html',
  styleUrl: './crear-recordatorio-orden-medica.component.scss'
})
export class CrearRecordatorioOrdenMedicaComponent {
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['medicamento', 'dias', 'cantidadTomas', 'horas', 'acciones'];
  isAnimationDone: boolean = false;

  medications: Medication[] = [
    { medicamento: 'Fluticasona', dias: 'Todos los días', cantidadTomas: 2, horas: '2:00 pm' },
    { medicamento: 'Mometasona', dias: 'Lun, Mier, Vier', cantidadTomas: 3, horas: '8:00 am' },
    { medicamento: 'Glucotrol', dias: 'Sab, Dom', cantidadTomas: 4, horas: '12:00 pm' }
  ];

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogElementsExampleDialog {}
