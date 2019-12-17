import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-configuracion-acme',
  templateUrl: './configuracion-acme.component.html',
  styleUrls: ['./configuracion-acme.component.css']
})
export class ConfiguracionAcmeComponent implements OnInit {
  valorMostrado: number;
  constructor(private ac: AppComponent) {
    this.valorMostrado = this.ac.porcentajeAcme;
  }

  ngOnInit() {
  }
  guardarDatos() {
    if (this.valorMostrado<=1 && this.valorMostrado >= 0){
    this.ac.porcentajeAcme = this.valorMostrado;
    console.log('nuevo valor guardado');
    }else{
      alert('Ingrese un valor entre 0 y 1');
    }
  }
}
