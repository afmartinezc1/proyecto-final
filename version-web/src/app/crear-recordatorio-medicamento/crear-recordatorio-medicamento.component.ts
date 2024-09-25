import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Location } from '@angular/common';



@Component({
  selector: 'app-crear-recordatorio-medicamento',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatLabel],
  templateUrl: './crear-recordatorio-medicamento.component.html',
  styleUrl: './crear-recordatorio-medicamento.component.scss'
})
export class CrearRecordatorioMedicamentoComponent {

  constructor(private location: Location){}

  goBack() {
    this.location.back();
  }
}
