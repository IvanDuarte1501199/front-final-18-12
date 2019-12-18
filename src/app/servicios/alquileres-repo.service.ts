import { Injectable } from '@angular/core';
import { Alquiler } from '../models/Alquiler';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { zip } from 'rxjs';
import { PersonasRepoService } from './personas-repo.service';

@Injectable({
  providedIn: 'root'
})
export class AlquileresRepoService {

  listadoAlquileres: Alquiler[] = [];
  listadoAlquileresPorPersona: Alquiler[] = [];
  alquilerAmostrar: Alquiler = new Alquiler(null, null, null, null, null);

  constructor(private _httpClient: HttpClient, private _personasRepoService: PersonasRepoService) { }

  setAlquilerAmostrar() {
    if (localStorage.getItem('idAlquiler') === '' || localStorage.getItem('idAlquiler') === null) {
      this.alquilerAmostrar = new Alquiler(null, null, null, null, null);
    } else {
      this.getAlquilerById(Number(localStorage.getItem('idAlquiler'))).subscribe((per) => {
        this.alquilerAmostrar = per;
      })
    }
  }

  getAllAlquileres() {
    this._httpClient.get<Alquiler[]>('http://localhost:4000/api/alquileres')
      .subscribe(
        (data) => {
          this.listadoAlquileres = data;
        });
  }
  getAllAlquileresPorPersona() {
    this.listadoAlquileresPorPersona = [];
    this._httpClient.get<Alquiler[]>('http://localhost:4000/api/alquileres')
      .subscribe(
        (data) => {
          data.forEach(element => {
            if (this._personasRepoService.personaLogeada.id == element.clienteId) {
              this.listadoAlquileresPorPersona.push(element);
            }
          });
        }
      );
  }

  getAlquilerById(alquilerId: number) {
    return this._httpClient.get<Alquiler>(`http://localhost:4000/api/alquileres/${alquilerId}`);
  }

  agregarAlquiler(nuevoAlquiler: Alquiler) {
    return this._httpClient.post('http://localhost:4000/api/alquileres', nuevoAlquiler);
  }

  borrarAlquiler(alquilerId: number) {
    return this._httpClient.delete(`http://localhost:4000/api/alquileres/${alquilerId}`);
  }

  actualizaAlquiler(alquiler: Alquiler) {
    return this._httpClient.put(`http://localhost:4000/api/alquileres/${alquiler.id}`, alquiler);
  }
}
