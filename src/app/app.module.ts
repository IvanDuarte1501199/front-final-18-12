
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PropiedadesListComponent } from './componentes/propiedades-list/propiedades-list.component';
import { PropiedadesFormComponent } from './componentes/propiedades-form/propiedades-form.component';
import { AlquileresListComponent } from './componentes/alquileres-list/alquileres-list.component';
import { AlquileresFormComponent } from './componentes/alquileres/alquileres-form/alquileres-form.component';
import { PantallaLoginComponent } from './componentes/pantalla-login/pantalla-login.component';
import { PantallaPrincipalComponent } from './componentes/pantalla-principal/pantalla-principal.component';
import { PersonasFormComponent } from './componentes/personas/personas-form/personas-form.component';
import { PersonasListComponent } from './componentes/personas/personas-list/personas-list.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { Buscar } from './pipes/buscador';
import { FilterPipe } from './pipes/filtrador';
import { ArraySortPipe } from './pipes/ordenador';
import { NavVarComponent } from './nav-var/nav-var.component';
const rutas: Routes = [
  { path: 'propiedades-list', component: PropiedadesListComponent },
  { path: 'propiedades-form', component: PropiedadesFormComponent },
  { path: 'alquileres-list', component: AlquileresListComponent },
  { path: 'alquileres-form', component: AlquileresFormComponent },
  { path: 'pantalla-login', component: PantallaLoginComponent },
  { path: 'personas-list', component: PersonasListComponent },
  { path: 'personas-form', component: PersonasFormComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '', component: PantallaPrincipalComponent }
];

@NgModule({
  declarations: [
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
    NavVarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
