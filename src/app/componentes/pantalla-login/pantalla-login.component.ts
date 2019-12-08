import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-login',
  templateUrl: './pantalla-login.component.html',
  styleUrls: ['./pantalla-login.component.css']
})
export class PantallaLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  VerificarId(id: number) {
    //si la id es un tipo cliente te redirige a pantalla-principal-cliente
    //si la id es un tipo cliente te redirige a pantalla-principal-duenio
    //si la id no esta en ninguno console.log("Id no encontrada en el sistema")
   
  }
}
