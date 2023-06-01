import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/modelos/Horario';
import { HorarioService } from 'src/app/servicio/horario.service';

@Component({
  selector: 'app-listar-horario',
  templateUrl: './listar-horario.component.html',
  styleUrls: ['./listar-horario.component.css']
})
export class ListarHorarioComponent implements OnInit {

  horarios?: Horario[];

  constructor(private horarioService:HorarioService) { }

  ngOnInit(): void {

    this.horarioService.getHorarios().subscribe(
      data=>{
        this.horarios=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
