
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
import { AlquileresFormComponent } from './componentes/alquileres/alquileres-form/alquileres-form.component';

import { NavVarComponent } from './componentes/nav-var/nav-var.component';
import { PantallaLoginComponent } from './componentes/pantallas/pantalla-login/pantalla-login.component';
import { PantallaPrincipalComponent } from './componentes/pantallas/pantalla-principal/pantalla-principal.component';

import { PersonasRepoService } from './servicios/personas-repo.service';
import { PropiedadesRepoService } from './servicios/propiedades-repo.service';
import { AlquileresRepoService } from './servicios/alquileres-repo.service';

import { Buscar } from './pipes/buscador';
import { ConfiguracionAcmeComponent } from './componentes/pantallas/configuracion-acme/configuracion-acme.component';
import { AlquierInfoComponent } from './componentes/alquileres/alquier-info/alquier-info.component';


const rutas: Routes = [
  { path: 'propiedades-list', component: PropiedadesListComponent },
  { path: 'propiedades-form', component: PropiedadesFormComponent },
  { path: 'alquileres-list', component: AlquileresListComponent },
  { path: 'alquileres-form', component: AlquileresFormComponent },
  { path: 'pantalla-login', component: PantallaLoginComponent },
  { path: 'personas-list', component: PersonasListComponent },
  { path: 'personas-form', component: PersonasFormComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'info-propiedad', component: InfoPropiedadComponent },
  { path: 'config-acme', component: ConfiguracionAcmeComponent },
  { path: 'info-alquiler', component: AlquierInfoComponent },
  { path: '', component: PantallaPrincipalComponent, pathMatch: 'full' }, 
  { path: '**',component: PantallaPrincipalComponent }
];




const componentes = [
  AppComponent,
  PropiedadesListComponent,
  PropiedadesFormComponent,
  AlquileresListComponent,
  AlquileresFormComponent,
  PantallaLoginComponent,
  PantallaPrincipalComponent,
  PersonasFormComponent,
  PersonasListComponent,
  PerfilComponent,
  Buscar,
  NavVarComponent,
  InfoPropiedadComponent,
  ConfiguracionAcmeComponent,
  AlquierInfoComponent
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
