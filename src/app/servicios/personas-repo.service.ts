import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasRepoService {

  listadoPersonas: Persona[] = [];

  constructor(private _httpClient: HttpClient) { }

  getAllPersonas() {
    this._httpClient.get<Persona[]>('http://localhost:3000/personas')
    .subscribe(
      (data) => this.listadoPersonas = data
    );
  }
 
  getPersonaById(personaId: number) {
    return this._httpClient.get<Persona>(`http://localhost:3000/personas/${personaId}`);
  }

  agregarPersona(nuevaPersona: Persona) {
    return this._httpClient.post('http://localhost:3000/personas',  nuevaPersona);
  }

  borrarPersona(personaId: number) {
    return this._httpClient.delete(`http://localhost:3000/personas/${personaId}`);
  }

  actualizarPersona(persona: Persona){
    return this._httpClient.put(`http://localhost:3000/personas/${persona.id}`, persona);
  }
}
