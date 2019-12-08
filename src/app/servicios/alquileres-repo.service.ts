import { Injectable } from '@angular/core';
import { Alquiler } from '../models/Alquiler';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlquileresRepoService {

  listadoAlquileres: Alquiler[] = [];

  constructor(private _httpClient: HttpClient) { }

  getAllAlquileres() {
    this._httpClient.get<Alquiler[]>('http://localhost:3000/alquileres')
    .subscribe(
      (data) => this.listadoAlquileres = data
    );
  }
 
  getAlquilerById(alquilerId: number) {
    return this._httpClient.get<Alquiler>(`http://localhost:3000/alquileres/${alquilerId}`);
  }

  agregarAlquiler(nuevoAlquiler: Alquiler) {
    return this._httpClient.post('http://localhost:3000/alquileres',  nuevoAlquiler);
  }

  borrarAlquiler(alquilerId: number) {
    return this._httpClient.delete(`http://localhost:3000/alquileres/${alquilerId}`);
  }

  actualizaAlquiler(alquiler: Alquiler){
    return this._httpClient.put(`http://localhost:3000/alquileres/${alquiler.id}`, alquiler);
  }
}
