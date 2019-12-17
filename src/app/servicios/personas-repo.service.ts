import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasRepoService {

  listadoPersonas: Persona[] = [];
  personaAmostrar: Persona = new Persona('', '', null, null, '');
  personaLogeada: Persona = new Persona('', '', null, null, '');
  nombresDueños: string[] = [];
  constructor(private _httpClient: HttpClient) {
    this.getAllPersonas();
    this.setPersonaLogeada();
  }

  setPersonaAmostrar() {
    if (localStorage.getItem('idPersona') === '' || localStorage.getItem('idPersona') === null) {
      this.personaAmostrar = new Persona('', '', null, null, '');
    } else {
      this.getPersonaById(Number(localStorage.getItem('idPersona'))).subscribe((per) => {
        this.personaAmostrar = per;
      })
    }
  }

  setPersonaLogeada() {
    if (localStorage.getItem('idLogeado') == '' || localStorage.getItem('idLogeado') === null || this.personaLogeada.id == null) {
      this.personaLogeada = new Persona('', '', null, null, '');
    } else {
      this.getPersonaById(Number(localStorage.getItem('idLogeado'))).subscribe((per) => {
        this.personaLogeada = per;
      })
    }
  }


  getAllPersonas() {
    this._httpClient.get<Persona[]>('http://localhost:4000/api/personas')
      .subscribe(
        (data) => {
          this.listadoPersonas = data
        });
  }

  getPersonaById(personaId: number) {
    return this._httpClient.get<Persona>(`http://localhost:4000/api/personas/${personaId}`);
  }

  agregarPersona(nuevaPersona: Persona) {
    return this._httpClient.post('http://localhost:4000/api/personas', nuevaPersona);
  }

  borrarPersona(personaId: number) {
    return this._httpClient.delete(`http://localhost:4000/api/personas/${personaId}`);
  }

  actualizarPersona(persona: Persona) {
    return this._httpClient.put(`http://localhost:4000/api/personas/${persona.id}`, persona);
  }
}
