import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent},
    { path: 'curso/:id', component: CursoDetalleComponent},
    { path: 'login',component: LoginComponent },
    { path: '', component: HomeComponent }
];

 export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
