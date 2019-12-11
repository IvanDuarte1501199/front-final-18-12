import { Component, OnInit } from '@angular/core';
import { PropiedadesRepoService } from 'src/app/servicios/propiedades-repo.service';

@Component({
  selector: 'app-pantalla-principal-cliente',
  templateUrl: './pantalla-principal-cliente.component.html',
  styleUrls: ['./pantalla-principal-cliente.component.css']
})
export class PantallaPrincipalClienteComponent implements OnInit {
  perfil: boolean;
  alquileres: boolean;
  departamentos: boolean;
  constructor(private _propiedadesRepoService: PropiedadesRepoService) {
    this.perfil = false;
    this._propiedadesRepoService.getAllPropiedades();
    this._propiedadesRepoService.getAllPropiedadesDisponibles();
  }

  ngOnInit() {
  }

  verPerfil() {
    this.departamentos = false;
    this.perfil = true;
    this.alquileres = false;
  }
  verDepartamentos() {
    this.departamentos = true;
    this.perfil = false;
    this.alquileres = false;
  }
  verAlquileres() {
    this.departamentos = false;
    this.perfil = false;
    this.alquileres = true;


  }
}
