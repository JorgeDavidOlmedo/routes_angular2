import { NgModule } from '@angular/core';

import { CursoNoEncontradoComponent } from './curso-no-encontrado/curso-no-encontrado.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    { path: 'cursos', component: CursosComponent},
    { path: 'curso/:id', component: CursoDetalleComponent},
    { path: 'login',component: LoginComponent },
    { path: 'noEncontrado',component: CursoNoEncontradoComponent },
    { path: '', component: HomeComponent }
];


@NgModule({

 imports:[RouterModule.forRoot(appRoutes)],
 exports:[RouterModule]
})
export class AppRoutingModule {

}