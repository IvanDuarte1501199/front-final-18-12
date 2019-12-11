import { Injectable } from '@angular/core';
import { Propiedad } from '../models/Propiedad';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesRepoService {

  listadoPropiedades: Propiedad[] = [];
  listadoPropiedadesXduenio: Propiedad[] = [];
  listadoPropiedadesDisponibles: Propiedad[] = [];
  constructor(private _httpClient: HttpClient) { }

  getAllPropiedades() {
    this._httpClient.get<Propiedad[]>('http://localhost:3000/propiedades')
      .subscribe(
        (data) => this.listadoPropiedades = data
      );
  }
  getAllPropiedadesXduenio(id: number) {
    this.listadoPropiedadesXduenio = [];
    this._httpClient.get<Propiedad[]>('http://localhost:3000/propiedades')
      .subscribe(
        (data) => {
          data.forEach(element => {
            if (element.dueñoId == id) {
              this.listadoPropiedadesXduenio.push(element);
            }
          });

        }
      );
  }

  getAllPropiedadesDisponibles() {
    this.listadoPropiedadesDisponibles = [];
    this._httpClient.get<Propiedad[]>('http://localhost:3000/propiedades')
      .subscribe(
        (data) => {
          data.forEach(element => {
            if (element.disponible ==  true) {
              this.listadoPropiedadesDisponibles.push(element);
            }
          });

        }
      );


  }
  getPropiedadById(propiedadId: number) {
    return this._httpClient.get<Propiedad>(`http://localhost:3000/propiedades/${propiedadId}`);
  }

  agregarPropiedad(nuevaPropiedad: Propiedad) {
    return this._httpClient.post('http://localhost:3000/propiedades', nuevaPropiedad);
  }

  borrarPropiedad(propiedadId: number) {
    return this._httpClient.delete(`http://localhost:3000/propiedades/${propiedadId}`);
  }

  actualizaPropiedad(propiedad: Propiedad) {
    return this._httpClient.put(`http://localhost:3000/propiedades/${propiedad.id}`, propiedad);
  }



}
