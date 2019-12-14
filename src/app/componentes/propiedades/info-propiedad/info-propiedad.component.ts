import { Component, OnInit } from '@angular/core';
import { Propiedad } from 'src/app/models/Propiedad';
import { PropiedadesRepoService } from 'src/app/servicios/propiedades-repo.service';
import { Persona } from 'src/app/models/Persona';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';
import { Alquiler } from 'src/app/models/Alquiler';
import { AlquileresRepoService } from 'src/app/servicios/alquileres-repo.service';
import { AppComponent } from 'src/app/app.component';
import { createNgModule } from '@angular/compiler/src/core';

@Component({
  selector: 'app-info-propiedad',
  templateUrl: './info-propiedad.component.html',
  styleUrls: ['./info-propiedad.component.css']
})

export class InfoPropiedadComponent implements OnInit {
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
    if (this.verificarFormulario()) {
      this.nuevoAlquiler.clienteId = this._personaRepoService.personaLogeada.id;
      this.nuevoAlquiler.propiedadId = idPropiedad;
      this.nuevoAlquiler.porcentajeAcme = this.ac.porcentajeAcme;
      this._alquilerRepoService.agregarAlquiler(this.nuevoAlquiler)
        .subscribe((response) => {
          console.log('se creo el alquiler: ', response);
          this.nuevoAlquiler = new Alquiler(null, null, null, null, null);
          this._personaRepoService.getAllPersonas();
        });
    }
  }

  verificarFormulario() {
    if (this.nuevoAlquiler.fechaInicio == null || this.nuevoAlquiler.fechaFin == null) {
      alert('Ingrese fechas correctamente');
      return false;
    } else {
      if (this.nuevoAlquiler.fechaInicio > this.nuevoAlquiler.fechaFin) {
        alert('La fecha de fin no puede ser menor a la de hoy');
        return false;
      }
    }
    return true;
  }

}
