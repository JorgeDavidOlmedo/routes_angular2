import { CursoNoEncontradoComponent } from './cursos/curso-no-encontrado/curso-no-encontrado.component';
import { CursoDetalleComponent } from './cursos/curso-detalle/curso-detalle.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent},
    { path: 'curso/:id', component: CursoDetalleComponent},
    { path: 'login',component: LoginComponent },
    { path: 'noEncontrado',component: CursoNoEncontradoComponent },
    { path: '', component: HomeComponent }
];

 export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
