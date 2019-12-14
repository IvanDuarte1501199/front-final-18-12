import { Component, OnInit } from '@angular/core';
import { Propiedad } from 'src/app/models/Propiedad';
import { PropiedadesRepoService } from 'src/app/servicios/propiedades-repo.service';
import { Persona } from 'src/app/models/Persona';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';
import { Alquiler } from 'src/app/models/Alquiler';
import { AlquileresRepoService } from 'src/app/servicios/alquileres-repo.service';

@Component({
  selector: 'app-info-propiedad',
  templateUrl: './info-propiedad.component.html',
  styleUrls: ['./info-propiedad.component.css']
})

export class InfoPropiedadComponent implements OnInit {
  nuevoAlquiler: Alquiler = new Alquiler(null, null, null, null, null);
  constructor(private _propiedadRepoService: PropiedadesRepoService, private _personaRepoService: PersonasRepoService, private _alquilerRepoService: AlquileresRepoService) {
    this._propiedadRepoService.getAllPropiedades();
    this._personaRepoService.getAllPersonas();
  }

  ngOnInit() {

  }
  alquilarPropiedad(idPropiedad: number) {
    this.nuevoAlquiler.clienteId = this._personaRepoService.personaLogeada.id;
    this.nuevoAlquiler.propiedadId = idPropiedad;
    this._alquilerRepoService.agregarAlquiler(this.nuevoAlquiler)
      .subscribe((response) => {
        console.log('se creo el alquiler: ', response);
        this.nuevoAlquiler = new Alquiler(null, null, null, null, null);
        this._personaRepoService.getAllPersonas();
      });
  }

}
