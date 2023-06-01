import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEspecialidadComponent } from './componentes/especialidad/listar-especialidad/listar-especialidad.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddEspecialidadComponent } from './componentes/especialidad/add-especialidad/add-especialidad.component';
import { EditEspecialidadComponent } from './componentes/especialidad/edit-especialidad/edit-especialidad.component';
import { ListarHorarioComponent } from './componentes/horario/listar-horario/listar-horario.component';
import { AddHorarioComponent } from './componentes/horario/add-horario/add-horario.component';
import { EditHorarioComponent } from './componentes/horario/edit-horario/edit-horario.component';
import { ListarVeterinarioComponent } from './componentes/veterinario/listar-veterinario/listar-veterinario.component';
import { AddVeterinarioComponent } from './componentes/veterinario/add-veterinario/add-veterinario.component';
import { EditVeterinarioComponent } from './componentes/veterinario/edit-veterinario/edit-veterinario.component'

@NgModule({
  declarations: [
    AppComponent,
    ListarEspecialidadComponent,
    AddEspecialidadComponent,
    EditEspecialidadComponent,
    ListarHorarioComponent,
    AddHorarioComponent,
    EditHorarioComponent,
    ListarVeterinarioComponent,
    AddVeterinarioComponent,
    EditVeterinarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
