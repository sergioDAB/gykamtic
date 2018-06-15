import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Graficas
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { DashboardProyectsComponent } from './dashboard-proyects/dashboard-proyects.component';
import { FormLoginComponent } from './forms/form-login/form-login.component';
import { FormRegisterComponent } from './forms/form-register/form-register.component';
import { FormProyectsComponent } from './forms/form-proyects/form-proyects.component';
import { FormPersonComponent } from './forms/form-person/form-person.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProyectsComponent,
    ContactComponent,
    HomeComponent,
    ServicesComponent,
    DashboardProyectsComponent,
    FormLoginComponent,
    FormRegisterComponent,
    FormProyectsComponent,
    FormPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
