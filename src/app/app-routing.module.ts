import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEspecialidadComponent } from './componentes/especialidad/listar-especialidad/listar-especialidad.component';
import { ListarHorarioComponent } from './componentes/horario/listar-horario/listar-horario.component';
import { ListarVeterinarioComponent } from './componentes/veterinario/listar-veterinario/listar-veterinario.component';
import { AddEspecialidadComponent } from './componentes/especialidad/add-especialidad/add-especialidad.component';
import { EditEspecialidadComponent } from './componentes/especialidad/edit-especialidad/edit-especialidad.component';
import { AddHorarioComponent } from './componentes/horario/add-horario/add-horario.component';
import { EditHorarioComponent } from './componentes/horario/edit-horario/edit-horario.component';
import { AddVeterinarioComponent } from './componentes/veterinario/add-veterinario/add-veterinario.component';
import { EditVeterinarioComponent } from './componentes/veterinario/edit-veterinario/edit-veterinario.component';

const routes: Routes = [
  {path:'especialidades', component:ListarEspecialidadComponent},
  {path:'nuevaEspecialidad', component:AddEspecialidadComponent},
  {path:'editarEspecialidad', component:EditEspecialidadComponent},

  {path:'horarios', component:ListarHorarioComponent},


  {path:'veterinarios',component:ListarVeterinarioComponent},
  {path:'nuevoVeterinario',component:AddVeterinarioComponent},
  {path:'editarVeterinario',component:EditVeterinarioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
