import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CursoNoEncontradoComponent } from './curso-no-encontrado/curso-no-encontrado.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { CursosComponent } from './cursos.component';


const cursosRoutes: Routes = [
    { path: 'cursos', component: CursosComponent},
    { path: 'curso/:id', component: CursoDetalleComponent},
    { path: 'noEncontrado',component: CursoNoEncontradoComponent }
  
];

@NgModule({

 imports:[RouterModule.forChild(cursosRoutes)],
 exports:[RouterModule]
})
export class CursosRoutingModule {

}