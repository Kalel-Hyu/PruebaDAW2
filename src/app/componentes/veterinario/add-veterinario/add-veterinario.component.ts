import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinario } from 'src/app/modelos/Veterinario';
import { VeterinarioService } from 'src/app/servicio/veterinario.service';

@Component({
  selector: 'app-add-veterinario',
  templateUrl: './add-veterinario.component.html',
  styleUrls: ['./add-veterinario.component.css']
})
export class AddVeterinarioComponent implements OnInit {
  
  modelVeterinario = new Veterinario();
  constructor(private router:Router, private veterinarioService:VeterinarioService) { }

  ngOnInit(): void {
  }

  guardar(veterinario:Veterinario){
    
    this.veterinarioService.createVeterinario(veterinario).subscribe(data=>{
      this.router.navigate(['veterinarios']);
    })
  }

}
