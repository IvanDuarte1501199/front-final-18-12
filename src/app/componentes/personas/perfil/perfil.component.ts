import { Component, OnInit } from '@angular/core';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  edicion: boolean = false;
  constructor(private _personaRepoService: PersonasRepoService) {
    _personaRepoService.getAllPersonas();
  }
  modoEdicion() {
    this.edicion = true;
  }
  editarPersona() {
    this.edicion = false; 
    this._personaRepoService.actualizarPersona(this._personaRepoService.personaLogeada)
    .subscribe(
      (response) => {
        this.edicion = false;
        this._personaRepoService.getAllPersonas();
      }
    );
  }


  ngOnInit() { }
}
