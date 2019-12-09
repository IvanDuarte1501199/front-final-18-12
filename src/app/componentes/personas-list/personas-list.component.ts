import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';

@Component({
  selector: 'app-personas-list',
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.css']
})
export class PersonasListComponent implements OnInit {

  busqueda: string = "";
  personaSeleccionada: Persona;

  constructor(private _personaRepoService: PersonasRepoService) {
    this._personaRepoService.getAllPersonas();
   }

  ngOnInit() {
    
  }

  obtenerPersona(personaId: number) {
    this._personaRepoService.getPersonaById(personaId)
      .subscribe((per) => {
        this.personaSeleccionada = per;
      });
  }

  borrarPersona(personaId: number) {
    this._personaRepoService.borrarPersona(personaId)
      .subscribe((response) => {
        console.log('se borro la persona ', response);
        this._personaRepoService.getAllPersonas();
      });
  }
}
