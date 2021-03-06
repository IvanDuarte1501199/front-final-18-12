
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { PersonasFormComponent } from './componentes/personas/personas-form/personas-form.component';
import { PersonasListComponent } from './componentes/personas/personas-list/personas-list.component';
import { PerfilComponent } from './componentes/personas/perfil/perfil.component';

import { PropiedadesListComponent } from './componentes/propiedades/propiedades-list/propiedades-list.component';
import { PropiedadesFormComponent } from './componentes/propiedades/propiedades-form/propiedades-form.component';
import { InfoPropiedadComponent } from './componentes/propiedades/info-propiedad/info-propiedad.component';

import { AlquileresListComponent } from './componentes/alquileres/alquileres-list/alquileres-list.component';

import { NavVarComponent } from './componentes/nav-var/nav-var.component';
import { PantallaLoginComponent } from './componentes/pantallas/pantalla-login/pantalla-login.component';
import { PantallaPrincipalComponent } from './componentes/pantallas/pantalla-principal/pantalla-principal.component';

import { PersonasRepoService } from './servicios/personas-repo.service';
import { PropiedadesRepoService } from './servicios/propiedades-repo.service';
import { AlquileresRepoService } from './servicios/alquileres-repo.service';

import { Buscar } from './pipes/buscador';
import { ConfiguracionAcmeComponent } from './componentes/pantallas/configuracion-acme/configuracion-acme.component';
import { AlquierInfoComponent } from './componentes/alquileres/alquier-info/alquier-info.component';
import { DatosDineroGastadoComponent } from './componentes/personas/datos-dinero-gastado/datos-dinero-gastado.component';
import { DatosPropiedadComponent } from './componentes/propiedades/datos-propiedad/datos-propiedad.component';
import { AlquileresDatosComponent } from './componentes/alquileres/alquileres-datos/alquileres-datos.component';


const rutas: Routes = [
  { path: 'propiedades-list', component: PropiedadesListComponent },
  { path: 'alquileres-list', component: AlquileresListComponent },
  { path: 'pantalla-login', component: PantallaLoginComponent },
  { path: 'personas-list', component: PersonasListComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'info-propiedad', component: InfoPropiedadComponent },
  { path: 'config-acme', component: ConfiguracionAcmeComponent },
  { path: 'info-alquiler', component: AlquierInfoComponent },
  { path: 'datos-dinero-gastado', component: DatosDineroGastadoComponent },
  { path: 'datos-propiedad', component: DatosPropiedadComponent },
  { path: 'alquileres-datos', component: AlquileresDatosComponent },
  { path: '', component: PantallaPrincipalComponent, pathMatch: 'full' },
  { path: '**', component: PantallaPrincipalComponent }
];




const componentes = [
  AppComponent,
  PropiedadesListComponent,
  PropiedadesFormComponent,
  AlquileresListComponent,
  PantallaLoginComponent,
  PantallaPrincipalComponent,
  PersonasFormComponent,
  PersonasListComponent,
  PerfilComponent,
  Buscar,
  NavVarComponent,
  InfoPropiedadComponent,
  ConfiguracionAcmeComponent,
  AlquierInfoComponent,
  DatosDineroGastadoComponent,
  DatosPropiedadComponent,
  AlquileresDatosComponent
]

@NgModule({
  declarations:
    componentes,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    ...componentes,
    RouterModule
  ],
  providers: [
    PersonasRepoService,
    PropiedadesRepoService,
    AlquileresRepoService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
