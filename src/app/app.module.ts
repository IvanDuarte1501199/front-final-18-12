
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PropiedadesListComponent } from './componentes/propiedades-list/propiedades-list.component';
import { PropiedadesFormComponent } from './componentes/propiedades-form/propiedades-form.component';
import { AlquileresListComponent } from './componentes/alquileres-list/alquileres-list.component';
import { AlquileresFormComponent } from './componentes/alquileres-form/alquileres-form.component';
import { PantallaLoginComponent } from './componentes/pantalla-login/pantalla-login.component';
import { PantallaPrincipalClienteComponent } from './componentes/pantalla-principal-cliente/pantalla-principal-cliente.component';
import { PantallaPrincipalDuenioComponent } from './componentes/pantalla-principal-duenio/pantalla-principal-duenio.component';
import { PantallaPrincipalComponent } from './componentes/pantalla-principal/pantalla-principal.component';
import { PersonasFormComponent } from './componentes/personas-form/personas-form.component';
import { PersonasListComponent } from './componentes/personas-list/personas-list.component';

const rutas: Routes = [
  { path: 'ropiedades-list', component: PropiedadesListComponent },
  { path: 'propiedades-form', component: PropiedadesFormComponent },
  { path: 'alquileres-list', component: AlquileresListComponent },
  { path: 'alquileres-form', component: AlquileresFormComponent },
  { path: 'pantalla-login', component: PantallaLoginComponent },
  { path: 'pantalla-principal-cliente', component: PantallaPrincipalClienteComponent },
  { path: 'pantalla-principal-duenio', component: PantallaPrincipalDuenioComponent },
  { path: 'personas-list', component: PersonasListComponent },
  { path: 'personas-form', component: PersonasFormComponent },
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
    PantallaPrincipalClienteComponent,
    PantallaPrincipalDuenioComponent,
    PantallaPrincipalComponent,
    PersonasFormComponent,
    PersonasListComponent
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
