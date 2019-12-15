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
  busqueda: string = "";
  constructor(private _propiedadesRepoService: PropiedadesRepoService, private _personasRepoService: PersonasRepoService) {
    this._propiedadesRepoService.getAllPropiedades();
    this._propiedadesRepoService.getAllPropiedadesXduenio(this._personasRepoService.personaLogeada.id);
    this._propiedadesRepoService.getAllPropiedadesDisponibles();
    
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

  verInformacion(idPropiedad) { 
    this._propiedadesRepoService.getPropiedadById(idPropiedad).subscribe(
      (pro) => {
        this._propiedadesRepoService.propiedadAmostrar = pro;
        this._personasRepoService.getPersonaById(pro.dueñoId).subscribe(
          (per) => {
            this._personasRepoService.personaAmostrar = per;
          }
        )
      }
    )

  }
}
