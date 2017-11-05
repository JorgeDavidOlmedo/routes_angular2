import { CursosService } from '../cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.css']
})
export class CursoDetalleComponent implements OnInit {

  id: number;
  inscripcion: Subscription;
  curso:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosServices: CursosService
  ) {
   
   }

  ngOnInit() {
    this.inscripcion = this.route.params.subscribe(
      (params: any) => { 
        this.id = params['id'];

        this.curso = this.cursosServices.getCurso(this.id);
        
        if(this.curso == null){
          this.router.navigate(['/noEncontrado']);
        }
       }
    );
  }

  ngOnDestroy(){
    this.inscripcion.unsubscribe;
  }

}
