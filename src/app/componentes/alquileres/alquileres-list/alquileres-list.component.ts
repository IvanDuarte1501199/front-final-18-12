import { Component, OnInit } from '@angular/core';
import { Alquiler } from 'src/app/models/Alquiler';
import { AlquileresRepoService } from 'src/app/servicios/alquileres-repo.service';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';

@Component({
  selector: 'app-alquileres-list',
  templateUrl: './alquileres-list.component.html',
  styleUrls: ['./alquileres-list.component.css']
})
export class AlquileresListComponent implements OnInit {

  alquilerSeleccionada: Alquiler = new Alquiler(null, null, null, null, null);
  constructor(private _alquileresRepoService: AlquileresRepoService, private _personasRepoService: PersonasRepoService) {
    this._alquileresRepoService.getAllAlquileres();
    this._alquileresRepoService.getAllAlquileresPorPersona(_personasRepoService.personaLogeada.id)
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
  
}
