import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especialidad } from 'src/app/modelos/Especialidad';
import { EspecialidadService } from 'src/app/servicio/especialidad.service';

@Component({
  selector: 'app-edit-especialidad',
  templateUrl: './edit-especialidad.component.html',
  styleUrls: ['./edit-especialidad.component.css']
})
export class EditEspecialidadComponent implements OnInit {

  especialidad: Especialidad = new Especialidad();
  constructor( private router:Router, private especialidadService:EspecialidadService) { }

  ngOnInit(): void {
    this.editar();
  }

  editar(){
    let id= JSON.parse(localStorage.getItem('idVeterinario') as string);
    this.especialidadService.getEspecialidadId(id).subscribe(data=>{
      this.especialidad=data;
    });
  }

  actualizar(especialidad:Especialidad){
    this.especialidadService.updateEspecialidad(especialidad).subscribe( data=>{
      this.especialidad=data;
      this.router.navigate(['especialidades']);
    });
  }

}
