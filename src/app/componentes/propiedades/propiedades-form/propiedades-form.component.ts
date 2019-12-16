import { Component, OnInit } from '@angular/core';
import { Propiedad } from 'src/app/models/Propiedad';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';
import { PropiedadesRepoService } from 'src/app/servicios/propiedades-repo.service';

@Component({
  selector: 'app-propiedades-form',
  templateUrl: './propiedades-form.component.html',
  styleUrls: ['./propiedades-form.component.css']
})
export class PropiedadesFormComponent implements OnInit {

  nuevaPropiedad: Propiedad = new Propiedad('', '', '', '', null, this._personaRepoService.personaLogeada.id);
  edicion: boolean = false;
  retorno: boolean;
  constructor(private _propiedadRepoService: PropiedadesRepoService, private _personaRepoService: PersonasRepoService) { }

  ngOnInit() {
  }
  verificarDatos() {
    this.retorno = true;
    if (this.nuevaPropiedad.nombre == '' ||
      this.nuevaPropiedad.ubicacion == '' ||
      this.nuevaPropiedad.precioXdia == null) {
      alert('complete todos los campos');
      this.retorno = false;
    }
    return this.retorno;
  }
  grabarPropiedad() {
    if (this.verificarDatos()) {
      if (this.edicion) {
        this._propiedadRepoService.actualizaPropiedad(this.nuevaPropiedad)
          .subscribe(
            (response) => {
              this.edicion = false;
              this.nuevaPropiedad = new Propiedad('', '', '', '', null, this._personaRepoService.personaLogeada.id);
              this._propiedadRepoService.getAllPropiedadesXduenio(this._personaRepoService.personaLogeada.id);
            }
          );
      } else {
        this._propiedadRepoService.agregarPropiedad(this.nuevaPropiedad)
          .subscribe((response) => {
            console.log('se creo la propiedad: ', response);
            this.nuevaPropiedad = new Propiedad('', '', '', '', null, this._personaRepoService.personaLogeada.id);
            this._propiedadRepoService.getAllPropiedadesXduenio(this._personaRepoService.personaLogeada.id);
          });
      }
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
