import { Component, OnInit } from '@angular/core';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.css']
})
export class NavVarComponent implements OnInit {
  tipo: string;
  constructor(private _personasRepoService: PersonasRepoService) {
  }

  ngOnInit() {
  }

  CerrarSesion() {
    this._personasRepoService.personaLogeada =  new Persona('','',null,null,'');
  }

}
