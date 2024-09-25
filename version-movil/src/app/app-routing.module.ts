import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'detalle-medicamentos',
    loadChildren: () => import('./detalle-medicamentos/detalle-medicamentos.module').then( m => m.DetalleMedicamentosPageModule)
  },
  {
    path: 'historial-tomas',
    loadChildren: () => import('./historial-tomas/historial-tomas.module').then( m => m.HistorialTomasPageModule)
  },
  {
    path: 'notificar-toma',
    loadChildren: () => import('./notificar-toma/notificar-toma.module').then( m => m.NotificarTomaPageModule)
  },
  {
    path: 'simular-notificacion',
    loadChildren: () => import('./simular-notificacion/simular-notificacion.module').then( m => m.SimularNotificacionPageModule)
  },
  {
    path: 'detalle-orden',
    loadChildren: () => import('./detalle-orden/detalle-orden.module').then( m => m.DetalleOrdenPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
