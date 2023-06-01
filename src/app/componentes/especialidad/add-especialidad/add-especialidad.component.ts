import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especialidad } from 'src/app/modelos/Especialidad';
import { EspecialidadService } from 'src/app/servicio/especialidad.service';

@Component({
  selector: 'app-add-especialidad',
  templateUrl: './add-especialidad.component.html',
  styleUrls: ['./add-especialidad.component.css']
})
export class AddEspecialidadComponent implements OnInit {

  modelEspecialidad = new Especialidad();
  constructor(private router:Router, private especialidadService:EspecialidadService) { }

  ngOnInit(): void {
  }

  guardar(especialidad:Especialidad){
    this.especialidadService.createEspecialidad(especialidad).subscribe( data=>{
      this.router.navigate(['especialidades']);
    });
  }

}
