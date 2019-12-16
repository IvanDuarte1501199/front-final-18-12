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
  retorno: boolean;
  constructor(private _personaRepoService: PersonasRepoService) {
    _personaRepoService.getAllPersonas();
  }
  modoEdicion() {
    this.edicion = true;
  }
  editarPersona() {
    if (this.verificarDatos()) {
      this.edicion = false;
      this._personaRepoService.actualizarPersona(this._personaRepoService.personaLogeada)
        .subscribe(
          (response) => {
            this.edicion = false;
            this._personaRepoService.getAllPersonas();
          }
        );
    }
  }
  verificarDatos() {
    this.retorno = true;
    if (this._personaRepoService.personaLogeada.nombre == null ||
      this._personaRepoService.personaLogeada.apellido == null ||
      this._personaRepoService.personaLogeada.dni == null ||
      this._personaRepoService.personaLogeada.fechaNacimiento == null ||
      this._personaRepoService.personaLogeada.tipo == '' ||
      this._personaRepoService.personaLogeada.tipo == null) {
      alert('complete todos los campos');
      this.retorno = false;
    } else {
      this._personaRepoService.listadoPersonas.forEach(element => {
        if (this._personaRepoService.personaLogeada.dni == element.dni && this._personaRepoService.personaLogeada.id != element.id) {
          this.retorno = false;
          alert('dni existente');
        }
      });
    }
    return this.retorno;
  }

  ngOnInit() { }
}
