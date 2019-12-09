import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-principal-duenio',
  templateUrl: './pantalla-principal-duenio.component.html',
  styleUrls: ['./pantalla-principal-duenio.component.css']
})
export class PantallaPrincipalDuenioComponent implements OnInit {
  perfil: boolean;
  propiedades: boolean;
  constructor() {
    this.perfil = false;
    this.propiedades = false;
  }

  ngOnInit() {
  }
  verPerfil() {
    this.perfil = true;
    this.propiedades = false;
  }
  verPropiedades() {
    this.perfil = false;
    this.propiedades = true;
  }
}
