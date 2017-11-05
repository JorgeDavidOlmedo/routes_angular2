import { CursosRoutingModule } from './cursos.routing.module';
import { CursosService } from './cursos.service';
import { CursoNoEncontradoComponent } from './curso-no-encontrado/curso-no-encontrado.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        CommonModule,
        CursosRoutingModule
    ],
    exports:[],
    declarations:[
        CursosComponent,
        CursoDetalleComponent,
        CursoNoEncontradoComponent
    ],
    providers:[
        CursosService
    ]
})

export class CursosModule {

}