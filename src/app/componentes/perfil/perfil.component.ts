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

  constructor(private _personasRepoService: PersonasRepoService) {
    _personasRepoService.getAllPersonas();
    this._personasRepoService.getPersonaById(Number(localStorage.getItem('id')))
      .subscribe(
        (per) => {
          this.personaAmostrar = per;
        }
      );

  }

  ngOnInit() {}
  }
