import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-cargar-orden-medica',
  standalone: true,
  imports: [MatLabel, MatIcon, MatButton],
  templateUrl: './cargar-orden-medica.component.html',
  styleUrl: './cargar-orden-medica.component.scss'
})
export class CargarOrdenMedicaComponent {

}
