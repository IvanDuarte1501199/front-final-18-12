import { Component, OnInit } from '@angular/core';
import { PropiedadesRepoService } from 'src/app/servicios/propiedades-repo.service';
import { AlquileresRepoService } from 'src/app/servicios/alquileres-repo.service';
import { PersonasRepoService } from 'src/app/servicios/personas-repo.service';

@Component({
  selector: 'app-alquier-info',
  templateUrl: './alquier-info.component.html',
  styleUrls: ['./alquier-info.component.css']
})
export class AlquierInfoComponent implements OnInit {

  constructor(private _propiedadRepoService: PropiedadesRepoService, private _alquilerRepoService: AlquileresRepoService, private _personaRepoService: PersonasRepoService) { }

  ngOnInit() {
  }

}
