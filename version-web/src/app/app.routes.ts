import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrearRecordatorioMedicamentoComponent } from './crear-recordatorio-medicamento/crear-recordatorio-medicamento.component';
import { CargarOrdenMedicaComponent } from './cargar-orden-medica/cargar-orden-medica.component';
import { ListarAlarmasComponent } from './listar-alarmas/listar-alarmas.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'crear-recordatorio', component: CrearRecordatorioMedicamentoComponent},
  { path: 'cargar-orden', component: CargarOrdenMedicaComponent},
  { path: 'listar-alarmas', component: ListarAlarmasComponent}
];
