import { Component, OnInit } from '@angular/core';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.css']
})
export class NavVarComponent implements OnInit {
  constructor(private _personasRepoService: PersonasRepoService) {
  
  }

  ngOnInit() {
  }

  CerrarSesion() {
    localStorage.setItem('idLogeado', '');
    this._personasRepoService.personaLogeada = new Persona('', '', null, null, '');
  }

}
