import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { DashboardProyectsComponent } from './dashboard-proyects/dashboard-proyects.component'
import { FormLoginComponent } from './forms/form-login/form-login.component';
import { FormRegisterComponent } from './forms/form-register/form-register.component';
import { FormPersonComponent } from './forms/form-person/form-person.component';
import { FormProyectsComponent } from './forms/form-proyects/form-proyects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'proyects', component: ProyectsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'proyects', component: ProyectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard-proyects', component: DashboardProyectsComponent },
  { path: 'form-login', component: FormLoginComponent },
  { path: 'form-register', component: FormRegisterComponent },
  { path: 'form-person', component: FormPersonComponent },
  { path: 'form-proyects', component: FormProyectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
