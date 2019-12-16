import { Component, OnInit } from '@angular/core';
import { Alquiler } from 'src/app/models/Alquiler';
import { AlquileresRepoService } from 'src/app/servicios/alquileres-repo.service';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';
import { PropiedadesRepoService } from 'src/app/servicios/propiedades-repo.service';

@Component({
  selector: 'app-alquileres-list',
  templateUrl: './alquileres-list.component.html',
  styleUrls: ['./alquileres-list.component.css']
})
export class AlquileresListComponent implements OnInit {
  busqueda: string = "";
  alquilerSeleccionada: Alquiler = new Alquiler(null, null, null, null, null);


  constructor(private _alquileresRepoService: AlquileresRepoService, private _personasRepoService: PersonasRepoService, private _propiedadesRepoService: PropiedadesRepoService) {
    this._alquileresRepoService.getAllAlquileres();
    this._alquileresRepoService.getAllAlquileresPorPersona(_personasRepoService.personaLogeada.id);
    this._propiedadesRepoService.getAllPropiedades();
    this._personasRepoService.getAllPersonas();
    /*
        this._personasRepoService.listadoPersonas.forEach(personas => {
          this._personasRepoService.nombresDueños[personas.id] = personas.nombre;
        });
      */
  }

  ngOnInit() {

  }

  obtenerAlquiler(personaId: number) {
    this._alquileresRepoService.getAlquilerById(personaId)
      .subscribe((per) => {
        this.alquilerSeleccionada = per;
      });
  }

  borrarAlquiler(personaId: number) {
    this._alquileresRepoService.borrarAlquiler(personaId)
      .subscribe((response) => {
        console.log('se borro la persona ', response);
        this._alquileresRepoService.getAllAlquileres();
      });
  }

  verInformacion(idAlquiler) {
    this._alquileresRepoService.getAlquilerById(idAlquiler).subscribe(
      (al) => {
        this._alquileresRepoService.alquilerAmostrar = al;
        this._propiedadesRepoService.getPropiedadById(al.propiedadId).subscribe(
          (pro) => {
            this._propiedadesRepoService.propiedadAmostrar = pro;
            this._personasRepoService.getPersonaById(pro.dueñoId).subscribe(
              (per) => {
                this._personasRepoService.personaAmostrar = per;
              });
          }
        )
      }
    )
  }
}
