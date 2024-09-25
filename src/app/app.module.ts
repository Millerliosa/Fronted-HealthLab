import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarLateralComponent } from './components/navbar-lateral/navbar-lateral.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioRegistroComponent,
    NavbarLateralComponent,
    HomeComponent,
    PerfilUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
