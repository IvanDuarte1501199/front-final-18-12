import { Component, OnInit } from '@angular/core';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  personaAmostrar: Persona = new Persona('', '', null, null, '');
  edicion: boolean = false;
  constructor(private _personaRepoService: PersonasRepoService) {
    _personaRepoService.getAllPersonas();
    if (Number(localStorage.getItem('id')) > 0 ) {
      
    }else{
      window.location.href = '';
    }
    this.getPersonaAmostrar()
  }
  modoEdicion() {
    this.edicion = true;
  }
  editarPersona() {
    this.edicion = false; 
    this._personaRepoService.actualizarPersona(this.personaAmostrar)
    .subscribe(
      (response) => {
        this.edicion = false;
        this.personaAmostrar =new Persona('','',null,null,'');
        this._personaRepoService.getAllPersonas();
        this.getPersonaAmostrar()
      }
    );
  }
  getPersonaAmostrar() {
    this._personaRepoService.getPersonaById(Number(localStorage.getItem('id')))
    .subscribe(
      (per) => {
        this.personaAmostrar = per;
      }
    );
  } 

  ngOnInit() { }
}
