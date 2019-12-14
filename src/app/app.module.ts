
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PropiedadesListComponent } from './componentes/propiedades/propiedades-list/propiedades-list.component';
import { PropiedadesFormComponent } from './componentes/propiedades/propiedades-form/propiedades-form.component';
import { AlquileresListComponent } from './componentes/alquileres/alquileres-list/alquileres-list.component';
import { AlquileresFormComponent } from './componentes/alquileres/alquileres-form/alquileres-form.component';
import { PantallaLoginComponent } from './componentes/pantalla-login/pantalla-login.component';
import { PantallaPrincipalComponent } from './componentes/pantalla-principal/pantalla-principal.component';
import { PersonasFormComponent } from './componentes/personas/personas-form/personas-form.component';
import { PersonasListComponent } from './componentes/personas/personas-list/personas-list.component';
import { PerfilComponent } from './componentes/personas/perfil/perfil.component';
import { Buscar } from './pipes/buscador';
import { FilterPipe } from './pipes/filtrador';
import { ArraySortPipe } from './pipes/ordenador';
import { NavVarComponent } from './componentes/nav-var/nav-var.component';
import { InfoPropiedadComponent } from './componentes/propiedades/info-propiedad/info-propiedad.component';
import { PersonasRepoService } from './servicios/personas-repo.service';
import { PropiedadesRepoService } from './servicios/propiedades-repo.service';
import { AlquileresRepoService } from './servicios/alquileres-repo.service';
import { CommonModule } from '@angular/common';


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
  { path: '', component: PantallaPrincipalComponent }
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
  FilterPipe,
  ArraySortPipe,
  NavVarComponent,
  InfoPropiedadComponent
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
