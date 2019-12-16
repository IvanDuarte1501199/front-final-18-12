import { Component, OnInit } from '@angular/core';
import { PropiedadesRepoService } from 'src/app/servicios/propiedades-repo.service';
import { AlquileresRepoService } from 'src/app/servicios/alquileres-repo.service';

@Component({
  selector: 'app-datos-propiedad',
  templateUrl: './datos-propiedad.component.html',
  styleUrls: ['./datos-propiedad.component.css']
})
export class DatosPropiedadComponent implements OnInit {

  constructor(private _propiedadesRepoService: PropiedadesRepoService, private _alquileresRepoService: AlquileresRepoService) {
    this._propiedadesRepoService.getAllPropiedades();
    this._alquileresRepoService.getAllAlquileres();
   }
  //  cuantas veces y cuantos dias se ha alquilado una propiedad entre dos fechas
  ngOnInit() {

  }

}
