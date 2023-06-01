import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { Especialidad } from 'src/app/modelos/Especialidad';
import { EspecialidadService } from 'src/app/servicio/especialidad.service';

@Component({
  selector: 'app-listar-especialidad',
  templateUrl: './listar-especialidad.component.html',
  styleUrls: ['./listar-especialidad.component.css']
})
export class ListarEspecialidadComponent implements OnInit {

  especialidades?:Especialidad[];

  constructor(private especialidadService:EspecialidadService, private router:Router) { }

  ngOnInit(): void {

    this.especialidadService.getEspecialidad().subscribe(
      data=>{
        this.especialidades=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  nuevo():void{
    this.router.navigate(['nuevaEspecialidad']);
  }

  editar(especialidad:Especialidad):void{
    localStorage.setItem("idVeterinario",especialidad.idVeterinario.toString());
    this.router.navigate(['editarEspecialidad']);
  }

  eliminar(especialidad:Especialidad):void{
    this.especialidadService.deleteEspecialidad(especialidad).subscribe(data=>{
      this.especialidades=this.especialidades!.filter(p=>p!==especialidad);
    });
  }

}
