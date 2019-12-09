import { Component, OnInit } from '@angular/core';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';

@Component({
  selector: 'app-pantalla-login',
  templateUrl: './pantalla-login.component.html',
  styleUrls: ['./pantalla-login.component.css']
})
export class PantallaLoginComponent implements OnInit {

  id: number;
  entro: boolean = false;

  constructor(private _personasRepoService: PersonasRepoService) {
    _personasRepoService.getAllPersonas();
  }

  ngOnInit() {
  }

  VerificarId() {
    console.log(this.id);
    this.entro = false;
    if (this.id == null) {
      alert('Ingrese una Identificacion');
    } else {
      this._personasRepoService.listadoPersonas.forEach(element => {
        if (this.id == element.dni) {
          localStorage.setItem('id', element.id.toString() );
          if (element.tipo == 'Cliente') {
            //Redireccion a app-pantalla-principal-cliente 
            window.location.href = '/pantalla-principal-cliente';
            this.entro = true;
          } else {
            //Redireccion a app-pantalla-principal-duenio
            window.location.href = '/pantalla-principal-duenio';
            this.entro = true;
          }
        }
      });
    }
    if (this.entro == false) {
      alert('Ingrese una Identificacion correcta');
    }

  }
}
