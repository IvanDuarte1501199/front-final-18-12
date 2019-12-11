import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.css']
})
export class NavVarComponent implements OnInit {
  tipo: string;
  constructor() {
    if (localStorage.getItem('tipo') == null) {
      this.tipo = null;
    }
    if (localStorage.getItem('tipo') == 'Dueño') {
      this.tipo = 'Dueño';
    }
    if (localStorage.getItem('tipo') == 'Cliente') {
      this.tipo = 'Cliente';
    }
  }

  ngOnInit() {
  }
  CerrarSesion() {
    localStorage.setItem('id', null);
    localStorage.setItem('tipo', null);
    window.location.href = '';
  }

}
