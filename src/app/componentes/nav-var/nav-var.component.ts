import { Component, OnInit } from '@angular/core';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';
import { Persona } from 'src/app/models/Persona';
import { AlquileresRepoService } from 'src/app/servicios/alquileres-repo.service';
import { PropiedadesRepoService } from 'src/app/servicios/propiedades-repo.service';

@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.css']
})
export class NavVarComponent implements OnInit {
  constructor(private _personasRepoService: PersonasRepoService, private _alquileresRepoService: AlquileresRepoService, private _propiedadesRepoService: PropiedadesRepoService) {
    this._personasRepoService.setPersonaLogeada();
    this._propiedadesRepoService.setPropiedadAmostrar();
    this._alquileresRepoService.setAlquilerAmostrar();
    this._personasRepoService.setPersonaAmostrar();
  }

  ngOnInit() {
  }

  CerrarSesion() {
    localStorage.setItem('idLogeado', '');
    this._personasRepoService.personaLogeada = new Persona('', '', null, null, '');
    this._personasRepoService.setPersonaLogeada();
  }

}
