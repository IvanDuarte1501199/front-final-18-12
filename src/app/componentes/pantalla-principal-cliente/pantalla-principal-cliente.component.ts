import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-principal-cliente',
  templateUrl: './pantalla-principal-cliente.component.html',
  styleUrls: ['./pantalla-principal-cliente.component.css']
})
export class PantallaPrincipalClienteComponent implements OnInit {
  perfil: boolean;
  departamentos: boolean;
  constructor() {
    this.perfil = false;
   }

  ngOnInit() {
  }

  verPerfil() {
    this.departamentos = false;
    this.perfil = true;
  }
  verDepartamentos() {
    this.departamentos = true;
    this.perfil = false;
  }
}
