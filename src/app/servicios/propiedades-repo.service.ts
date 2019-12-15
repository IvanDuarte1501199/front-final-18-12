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
  propiedadAmostrar: Propiedad = new Propiedad('', '', '', '', null, null);
  idTemp: number;
  constructor(private _httpClient: HttpClient) {

  }

  getAllPropiedades() {
    this._httpClient.get<Propiedad[]>('http://localhost:4000/api/propiedades')
      .subscribe(
        (data) => this.listadoPropiedades = data
      );
  }

  getAllPropiedadesXduenio(id: number) {
    this.listadoPropiedadesXduenio = [];
    this._httpClient.get<Propiedad[]>('http://localhost:4000/api/propiedades')
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

  
  getPropiedadById(propiedadId: number) {
    return this._httpClient.get<Propiedad>(`http://localhost:4000/api/propiedades/${propiedadId}`);
  }

  agregarPropiedad(nuevaPropiedad: Propiedad) {
    return this._httpClient.post('http://localhost:4000/api/propiedades', nuevaPropiedad);
  }

  borrarPropiedad(propiedadId: number) {
    return this._httpClient.delete(`http://localhost:4000/api/propiedades/${propiedadId}`);
  }

  actualizaPropiedad(propiedad: Propiedad) {
    return this._httpClient.put(`http://localhost:4000/api/propiedades/${propiedad.id}`, propiedad);
  }



}
