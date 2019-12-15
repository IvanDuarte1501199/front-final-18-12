import { Component, OnInit } from '@angular/core';
import { Propiedad } from 'src/app/models/Propiedad';
import { PropiedadesRepoService } from 'src/app/servicios/propiedades-repo.service';
import { Persona } from 'src/app/models/Persona';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';
import { Alquiler } from 'src/app/models/Alquiler';
import { AlquileresRepoService } from 'src/app/servicios/alquileres-repo.service';
import { AppComponent } from 'src/app/app.component';
import { createNgModule } from '@angular/compiler/src/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { createElementCssSelector } from '@angular/compiler';

@Component({
  selector: 'app-info-propiedad',
  templateUrl: './info-propiedad.component.html',
  styleUrls: ['./info-propiedad.component.css']
})

export class InfoPropiedadComponent implements OnInit {
  retorno: Boolean;
  cant: number;
  //para obtener la fecha actual
  dd: string;
  mm: string;
  yyyy: string;
  set_date: string;
  nuevoAlquiler: Alquiler = new Alquiler(null, null, null, null, null);
  constructor(private _propiedadRepoService: PropiedadesRepoService, private _personaRepoService: PersonasRepoService, private _alquilerRepoService: AlquileresRepoService, private ac: AppComponent) {
    this._propiedadRepoService.getAllPropiedades();
    this._personaRepoService.getAllPersonas();
    //COMENTAR Y DESCOMENTAR SEGUN CONVENIENCIA DE TESTING 
    this.setFecha();
  }

  ngOnInit() {

  }

  setFecha() {
    this.dd = new Date().getDate().toString();
    this.mm = (new Date().getMonth() + 1).toString();
    this.yyyy = new Date().getFullYear().toString();
    if (parseInt(this.dd) < 10) {
      this.dd = '0' + this.dd
    }
    if (parseInt(this.mm) < 10) {
      this.mm = '0' + this.mm
    }
    this.set_date = this.yyyy + '-' + this.mm + '-' + this.dd;
    console.log(this.ac.porcentajeAcme);
  }

  alquilarPropiedad(idPropiedad: number) {
    this.nuevoAlquiler.clienteId = this._personaRepoService.personaLogeada.id;
    this.nuevoAlquiler.propiedadId = idPropiedad;
    this.nuevoAlquiler.porcentajeAcme = this.ac.porcentajeAcme;
    if (this.verificarFormulario()) {
      this._alquilerRepoService.agregarAlquiler(this.nuevoAlquiler)
        .subscribe((response) => {
          console.log('se creo el alquiler: ', response);
          this.nuevoAlquiler = new Alquiler(null, null, null, null, null);
          this._personaRepoService.getAllPersonas();
        });
      /*  para sacar de disponible a la propiedad, verificar la fecha que sea hoy
      this._propiedadRepoService.propiedadAmostrar.disponible = false;
      this._propiedadRepoService.actualizaPropiedad(this._propiedadRepoService.propiedadAmostrar)
        .subscribe(
          (response) => {
            this._personaRepoService.getAllPersonas();
          }
        );
    */
    }
  }

  verificarFormulario() {
    this.retorno = true;
    this.cant = 0;
    if (this.nuevoAlquiler.fechaInicio == null || this.nuevoAlquiler.fechaFin == null) {
      alert('Ingrese fechas correctamente');
      console.log('entro al if 1');
      this.retorno = false;
    } else {
      if (this.nuevoAlquiler.fechaInicio > this.nuevoAlquiler.fechaFin) {
        alert('La fecha de fin no puede ser menor a la de inicio');
        console.log('entro al if 2');
        this.retorno = false;
      } else {
        if (this.nuevoAlquiler.fechaInicio.toString() < this.set_date && this.nuevoAlquiler.fechaFin.toString() < this.set_date) {
          alert('Las fechas no pueden ser menor a la de hoy');
          console.log('entro al if 3');
          this.retorno = false;
        } else {
          this._alquilerRepoService.listadoAlquileres.forEach(element => {
            if ((this.nuevoAlquiler.fechaInicio >= element.fechaInicio && this.nuevoAlquiler.fechaInicio <= element.fechaFin) || (this.nuevoAlquiler.fechaFin >=  element.fechaInicio && this.nuevoAlquiler.fechaFin <= element.fechaFin) && (element.propiedadId == this.nuevoAlquiler.propiedadId)) {
              if(this.cant == 0 ){
              alert('Esta Propiedad está alquilada entre las fechas ingresadas');
              this.cant++;
              }
              this.retorno = false;
            }
          });
        }
      }
    }
    return this.retorno;
  }

}
