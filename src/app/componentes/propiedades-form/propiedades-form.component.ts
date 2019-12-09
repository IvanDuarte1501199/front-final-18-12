import { Component, OnInit } from '@angular/core';
import { Propiedad } from 'src/app/models/Propiedad';
import { PropiedadesRepoService } from 'src/app/servicios/propiedades-repo.service';

@Component({
  selector: 'app-propiedades-form',
  templateUrl: './propiedades-form.component.html',
  styleUrls: ['./propiedades-form.component.css']
})
export class PropiedadesFormComponent implements OnInit {

  nuevaPropiedad: Propiedad = new Propiedad('','','','',null, Number(localStorage.getItem('id')));
  edicion: boolean = false;
  constructor(private _propiedadRepoService: PropiedadesRepoService) { }

  ngOnInit() {
  }
  grabarPropiedad() {
    if (this.edicion) {
      this._propiedadRepoService.actualizaPropiedad(this.nuevaPropiedad)
        .subscribe(
          (response) => {
            this.edicion = false;
            this.nuevaPropiedad = new Propiedad('','','','',null, Number(localStorage.getItem('id')));
            this._propiedadRepoService.getAllPropiedades();
          }
        );
    } else {
      this._propiedadRepoService.agregarPropiedad(this.nuevaPropiedad)
        .subscribe((response) => {
          console.log('se creo la propiedad: ', response);
          this.nuevaPropiedad = new Propiedad('','','','',null, Number(localStorage.getItem('id')));
          this._propiedadRepoService.getAllPropiedades();
        });
    }
  }

  editarPropiedad(propiedadId: number) {
    this._propiedadRepoService.getPropiedadById(propiedadId)
      .subscribe(
        (pro) => {
          this.nuevaPropiedad = pro;
          this.edicion = true;
        }
      );
  }
}
