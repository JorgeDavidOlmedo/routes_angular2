import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.css']
})
export class CursoDetalleComponent implements OnInit {

  id: number;
  inscripcion: Subscription;

  constructor(private route: ActivatedRoute) {
   
   }

  ngOnInit() {
    this.inscripcion = this.route.params.subscribe(
      (params: any) => { 
        this.id = +params['id'];
       }
    );
  }

  ngOnDestroy(){
    this.inscripcion.unsubscribe;
  }

}
