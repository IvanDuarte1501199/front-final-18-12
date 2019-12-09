import { Component, OnInit } from '@angular/core';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css']
})
export class PersonasFormComponent implements OnInit {

  nuevaPersona: Persona = new Persona('','',null,null,'');
  edicion: boolean = false;
  constructor(private _personaRepoService: PersonasRepoService) { }

  ngOnInit() {
  }
  grabarPersona() {
    if (this.edicion) {
      this._personaRepoService.actualizarPersona(this.nuevaPersona)
        .subscribe(
          (response) => {
            this.edicion = false;
            this.nuevaPersona =new Persona('','',null,null,'');
            this._personaRepoService.getAllPersonas();
          }
        );
    } else {
      this._personaRepoService.agregarPersona(this.nuevaPersona)
        .subscribe((response) => {
          console.log('se creo la persona: ', response);
          this.nuevaPersona = new Persona('','',null,null,'');
          this._personaRepoService.getAllPersonas();
        });
    }
  }

  editarPersona(personaId: number) {
    this._personaRepoService.getPersonaById(personaId)
      .subscribe(
        (per) => {
          this.nuevaPersona = per;
          this.edicion = true;
        }
      );
  }
}
