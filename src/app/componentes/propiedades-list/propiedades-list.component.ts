import { Component, OnInit } from '@angular/core';
import { PropiedadesRepoService } from 'src/app/servicios/propiedades-repo.service';
import { Propiedad } from 'src/app/models/Propiedad';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';

@Component({
  selector: 'app-propiedades-list',
  templateUrl: './propiedades-list.component.html',
  styleUrls: ['./propiedades-list.component.css']
})
export class PropiedadesListComponent implements OnInit {

  propiedadSeleccionada: Propiedad;
  tipo: string;
  constructor(private _propiedadesRepoService: PropiedadesRepoService, private _personasRepoService: PersonasRepoService) {
    this._propiedadesRepoService.getAllPropiedades();
    this._propiedadesRepoService.getAllPropiedadesXduenio(Number(localStorage.getItem('id')));
    this._propiedadesRepoService.getAllPropiedadesDisponibles();
   
    if (localStorage.getItem('tipo') == null) {
      this.tipo = null;
    }
    if (localStorage.getItem('tipo') == 'Dueño') {
      this.tipo = 'Dueño';
    }
    if (localStorage.getItem('tipo') == 'Cliente') {
      this.tipo = 'Cliente';
    }
  }

  ngOnInit() {

  }

  obtenerPropiedad(propiedadId: number) {
    this._propiedadesRepoService.getPropiedadById(propiedadId)
      .subscribe((pro) => {
        this.propiedadSeleccionada = pro;
      });
  }

  borrarPropiedad(propiedadId: number) {
    this._propiedadesRepoService.borrarPropiedad(propiedadId)
      .subscribe((response) => {
        console.log('se borro la persona ', response);
        this._propiedadesRepoService.getAllPropiedades();
      });
  }
}
