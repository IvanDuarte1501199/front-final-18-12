import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';
import { BinaryOperatorExpr } from '@angular/compiler';

@Component({
  selector: 'app-pantalla-login',
  templateUrl: './pantalla-login.component.html',
  styleUrls: ['./pantalla-login.component.css']
})
export class PantallaLoginComponent implements OnInit {

  DniIngresado: number;
  entro: boolean = false;
  constructor(private _personasRepoService: PersonasRepoService) {
    _personasRepoService.getAllPersonas();
  }

  ngOnInit() {
  }

  VerificarId() {
    this._personasRepoService.getAllPersonas();
    this.entro = false;
    if (this.DniIngresado == null) {
      alert('Ingrese una Identificacion');
    } else {
      this._personasRepoService.listadoPersonas.forEach(element => {
        if (this.DniIngresado == element.dni) {
          this.entro = true;
          localStorage.setItem('idLogeado', element.id.toString());
          this._personasRepoService.setPersonaLogeada();
        }
      });
      if (this.entro == false) {
        alert('Ingrese una Identificacion correcta');
      }
    }
  }
}
