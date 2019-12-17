import { Injectable } from '@angular/core';
import { Propiedad } from '../models/Propiedad';
import { HttpClient } from '@angular/common/http';
import { PersonasRepoService } from './personas-repo.service';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesRepoService {

  listadoPropiedades: Propiedad[] = [];
  listadoPropiedadesXduenio: Propiedad[] = [];
  listadoPropiedadesDisponibles: Propiedad[] = [];
  propiedadAmostrar: Propiedad = new Propiedad('', '', '', '', null, null);
  nombresPropiedades: string[] = [];
  constructor(private _httpClient: HttpClient, private _personasRepoService: PersonasRepoService) {

  }

  setPropiedadAmostrar() {
    if (localStorage.getItem('idPropiedad') === '' || localStorage.getItem('idPropiedad') === null) {
      this.propiedadAmostrar = new Propiedad('', '', '', '', null, null);
    } else {
      this.getPropiedadById(Number(localStorage.getItem('idPropiedad'))).subscribe((per) => {
        this.propiedadAmostrar = per;
      })
    }
  }

  getAllPropiedades() {
    this._httpClient.get<Propiedad[]>('http://localhost:4000/api/propiedades')
      .subscribe(
        (data) => {
          this.listadoPropiedades = data

          //carga de nombres de propiedades

          this.listadoPropiedades.forEach(propiedad => {
            this.nombresPropiedades[propiedad.id] = propiedad.nombre;
            this._personasRepoService.getPersonaById(propiedad.dueñoId).subscribe((per) => {
              this._personasRepoService.nombresDueños[propiedad.id] = per.nombre;
            })

          });

        });
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
