import { Component, OnInit } from '@angular/core';
import { AlquileresRepoService } from 'src/app/servicios/alquileres-repo.service';
import { Propiedad } from 'src/app/models/Propiedad';
import { PropiedadesRepoService } from 'src/app/servicios/propiedades-repo.service';

@Component({
  selector: 'app-datos-dinero-gastado',
  templateUrl: './datos-dinero-gastado.component.html',
  styleUrls: ['./datos-dinero-gastado.component.css']
})
export class DatosDineroGastadoComponent implements OnInit {
  ver: boolean = false;
  fechaInicio: Date;
  fechaFin: Date;
  retorno: boolean;
  precioCalculado: number = 0.0;
  cantDias: number = 0;
  cantDiasTotal: number = 0;
  constructor(private _alquileresRepoService: AlquileresRepoService, private _propiedadesRepoService: PropiedadesRepoService) {
    _alquileresRepoService.getAllAlquileres();
    _propiedadesRepoService.getAllPropiedades();
  }

  ngOnInit() {
  }

  // Total de dinero gastado entre dos fechas (puede ser pasado o futuro)
  /*
  ACLARIACION
  --> Si la fecha de inicio ingresada, esta entre la fecha de inicio del alquiler y fecha fin del alquiler 
  YYYY 
  la fecha de fin ingresada   esta entre la fecha de inicio del alquiler y fecha fin del alquiler 
  ====
  hay que sacar la diferencia entre dias de la fecha de inicio ingresada con la fecha de fin ingresada


  --> si la fecha de inicio ingresada, esta entre la fecha de inicio del alquiler y fecha fin del alquiler
  YYYY
  la fecha de fin ingresada NO esta entre las fechas de inicio del alquiler y fin del alquiler
  ===
  hay que sacar la direncia de dias entre la fecha de inicio y la fecha de fin de el alquiler



  --> si la fecha de inicio ingresada NO esta entre la fecha de inicio del alquiler y la fecha fin del alquiler
  YYYY
  la fecha de fin ingresada esta entre las fechas de inicio del alquiler y fin del alquiler
  ====
  hay que sacar la diferencia entre la fecha de inicio del alquiler y la fecha de fin ingresada



  --> si la fecha de inicio ingresada no esta entre las fechas de alquiler 
  YYYY 
  la fecha de fin ingresada tampoco esta entre las fechas de alquiler
  ====
  no sumar nada
  */
  verDatos() {
    this.cantDiasTotal = 0;
    this.precioCalculado = 0;
    this.cantDias = 0;
    var Ifechaini = new Date(this.fechaInicio);
    var Ifechafin = new Date(this.fechaFin);

    if (this.verificarDatos()) {
      this._alquileresRepoService.listadoAlquileres.forEach(alquiler => {
        //fechas del alquiler
        var Afechaini = new Date(alquiler.fechaInicio);
        var Afechafin = new Date(alquiler.fechaFin);
        //propiedad de este alquiler
        this._propiedadesRepoService.getPropiedadById(alquiler.propiedadId).subscribe((pro) => {
          // comienza toda la comprobacion de dias
          if ((this.fechaInicio >= alquiler.fechaInicio && this.fechaInicio <= alquiler.fechaFin) && (this.fechaFin >= alquiler.fechaInicio && this.fechaFin <= alquiler.fechaFin)) {
            //sacar la diferencia entre dias de la fecha de inicio ingresada con la fecha de fin ingresada
            this.cantDias = Ifechafin.getTime() - Ifechaini.getTime();
            this.cantDias = Math.round(this.cantDias / (1000 * 60 * 60 * 24));
            this.cantDias  = this.cantDias + 1;
            this.cantDiasTotal = this.cantDiasTotal + this.cantDias;
            if (this.cantDias > 0) {
              this.precioCalculado = this.precioCalculado + (this.cantDias * pro.precioXdia)
            }
          }
          else {
            if ((this.fechaInicio >= alquiler.fechaInicio && this.fechaInicio <= alquiler.fechaFin) && !(this.fechaFin >= alquiler.fechaInicio && this.fechaFin <= alquiler.fechaFin)) {
              // hay que sacar la direncia de dias entre la fecha de inicio y la fecha de fin de el alquiler
              this.cantDias = Ifechafin.getTime() - Afechafin.getTime();
              this.cantDias = Math.round(this.cantDias / (1000 * 60 * 60 * 24));
              this.cantDias  = this.cantDias + 1;
              this.cantDiasTotal = this.cantDiasTotal + this.cantDias;
              if (this.cantDias > 0) {
                this.precioCalculado = this.precioCalculado + (this.cantDias * pro.precioXdia)
              }
            } else {
              if (!(this.fechaInicio >= alquiler.fechaInicio && this.fechaInicio <= alquiler.fechaFin) && (this.fechaFin >= alquiler.fechaInicio && this.fechaFin <= alquiler.fechaFin)) {
                //hay que sacar la diferencia entre la fecha de inicio del alquiler y la fecha de fin ingresada
                this.cantDias = Ifechaini.getTime() - Afechaini.getTime();
                this.cantDias = Math.round(this.cantDias / (1000 * 60 * 60 * 24));
                this.cantDias  = this.cantDias + 1;
                this.cantDiasTotal = this.cantDiasTotal + this.cantDias;
                if (this.cantDias > 0) {
                  this.precioCalculado = this.precioCalculado + (this.cantDias * pro.precioXdia)
                }
              } else {
                if (this.fechaInicio <= alquiler.fechaInicio && this.fechaFin >= alquiler.fechaFin) {
                  this.cantDias = Afechafin.getTime() - Afechaini.getTime();
                  this.cantDias = Math.round(this.cantDias / (1000 * 60 * 60 * 24));
                  this.cantDias  = this.cantDias + 1;
                  this.cantDiasTotal = this.cantDiasTotal + this.cantDias;
                  if (this.cantDias > 0) {
                    this.precioCalculado = this.precioCalculado + (this.cantDias * pro.precioXdia)
                  }
                  console.log(this.cantDias);
                  console.log(this.cantDiasTotal);
                } else {
                }
              }
            }
          }
        });

      });
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
