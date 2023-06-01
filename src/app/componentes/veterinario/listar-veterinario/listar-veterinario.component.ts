import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinario } from 'src/app/modelos/Veterinario';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

@Component({
  selector: 'app-listar-veterinario',
  templateUrl: './listar-veterinario.component.html',
  styleUrls: ['./listar-veterinario.component.css']
})
export class ListarVeterinarioComponent implements OnInit {

  veterinarios?:Veterinario[];

  constructor(private veterinarioService:VeterinarioService, private router:Router) { }

  ngOnInit(): void {

    this.veterinarioService.getVeterinarios().subscribe(
      data=>{
        this.veterinarios=data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  nuevo():void{
    this.router.navigate(['nuevoVeterinario']);
  }

  editar(veterinario:Veterinario):void{
    localStorage.setItem("id",veterinario.idVeterinario.toString());
    this.router.navigate(['editarVeterinario']);
  }

  eliminar(veterinario:Veterinario):void{
    this.veterinarioService.deleteVeterinario(veterinario).subscribe(data=>{
      this.veterinarios=this.veterinarios!.filter(p=>p!==veterinario);
    })
  }

}
