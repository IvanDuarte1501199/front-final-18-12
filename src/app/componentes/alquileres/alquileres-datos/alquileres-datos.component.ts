import { Component, OnInit } from '@angular/core';
import { PropiedadesRepoService } from 'src/app/servicios/propiedades-repo.service';
import { AlquileresRepoService } from 'src/app/servicios/alquileres-repo.service';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';

@Component({
  selector: 'app-alquileres-datos',
  templateUrl: './alquileres-datos.component.html',
  styleUrls: ['./alquileres-datos.component.css']
})
export class AlquileresDatosComponent implements OnInit {
  fechaInicio: Date;
  fechaFin: Date;
  retorno: boolean;
  ver: boolean = false;
  precioNeto: number;
  precioAcumTotal: number;
  precioAcumParaAcme: number;
  cantDias: number;
  constructor(private _propiedadesRepoService: PropiedadesRepoService, private _alquileresRepoService: AlquileresRepoService, private _personasRepoService: PersonasRepoService) {
    this._propiedadesRepoService.getAllPropiedades();
    this._propiedadesRepoService.getAllPropiedadesXduenio();
    this._alquileresRepoService.getAllAlquileres();
  }

  ngOnInit() {
  }

  verDatos() {
    this.precioNeto = 0;
    this.precioAcumParaAcme = 0;
    this.precioAcumTotal = 0;
    var Ifechaini = new Date(this.fechaInicio);
    var Ifechafin = new Date(this.fechaFin);
    if (this.verificarDatos()) {

      //foreach de alquileres
      this._alquileresRepoService.listadoAlquileres.forEach(alquiler => {
        //foreach de las propiedades del dueño logeado
        var Afechaini = new Date(alquiler.fechaInicio);
        var Afechafin = new Date(alquiler.fechaFin);


        this._propiedadesRepoService.listadoPropiedadesXduenio.forEach(propiedad => {
          if (alquiler.propiedadId === propiedad.id) {


            if ((this.fechaInicio >= alquiler.fechaInicio && this.fechaInicio <= alquiler.fechaFin) && (this.fechaFin >= alquiler.fechaInicio && this.fechaFin <= alquiler.fechaFin)) {
              this.cantDias = Ifechafin.getTime() - Ifechaini.getTime();
              this.cantDias = Math.round(this.cantDias / (1000 * 60 * 60 * 24)) + 1;
              this.precioAcumTotal = this.precioAcumTotal + (this.cantDias * propiedad.precioXdia);
              this.precioAcumParaAcme = this.precioAcumParaAcme + ((this.cantDias * propiedad.precioXdia) * alquiler.porcentajeAcme);
            } else {
              if ((this.fechaInicio >= alquiler.fechaInicio && this.fechaInicio <= alquiler.fechaFin) && !(this.fechaFin >= alquiler.fechaInicio && this.fechaFin <= alquiler.fechaFin)) {
                this.cantDias = Afechafin.getTime() - Ifechaini.getTime();
                this.cantDias = Math.round(this.cantDias / (1000 * 60 * 60 * 24)) + 1;
                this.precioAcumTotal = this.precioAcumTotal + (this.cantDias * propiedad.precioXdia);
                this.precioAcumParaAcme = this.precioAcumParaAcme + ((this.cantDias * propiedad.precioXdia) * alquiler.porcentajeAcme);
              } else {
                if (!(this.fechaInicio >= alquiler.fechaInicio && this.fechaInicio <= alquiler.fechaFin) && (this.fechaFin >= alquiler.fechaInicio && this.fechaFin <= alquiler.fechaFin)) {
                  this.cantDias = Ifechafin.getTime() - Afechaini.getTime();
                  this.cantDias = Math.round(this.cantDias / (1000 * 60 * 60 * 24)) + 1;
                  this.precioAcumTotal = this.precioAcumTotal + (this.cantDias * propiedad.precioXdia);
                  this.precioAcumParaAcme = this.precioAcumParaAcme + ((this.cantDias * propiedad.precioXdia) * alquiler.porcentajeAcme);
                } else {
                  if (this.fechaInicio <= alquiler.fechaInicio && this.fechaFin >= alquiler.fechaFin) {
                    this.cantDias = Afechafin.getTime() - Afechaini.getTime();
                    this.cantDias = Math.round(this.cantDias / (1000 * 60 * 60 * 24)) + 1;
                    this.precioAcumTotal = this.precioAcumTotal + (this.cantDias * propiedad.precioXdia);
                    this.precioAcumParaAcme = this.precioAcumParaAcme + ((this.cantDias * propiedad.precioXdia) * alquiler.porcentajeAcme);
                  }
                }
              }
            }

          }
        });//fin foreach prop
      });//fin foreach alqui

      this.precioNeto = this.precioAcumTotal - this.precioAcumParaAcme;
      this.ver = true;
    } else {
      this.ver = false;
    }
  }

  verificarDatos() {
    this.retorno = true;
    if (this.fechaInicio == null || this.fechaFin == null) {
      alert('Ingrese fechas correctamente');
      this.retorno = false;
    } else {
      if (this.fechaInicio > this.fechaFin) {
        alert('La fecha de fin no puede ser menor a la de inicio');
        this.retorno = false;
      }
    }
    return this.retorno;
  }
}
