import { Injectable } from '@angular/core';
import { Veterinario } from '../modelos/Veterinario';
import { HttpClient } from '@angular/common/http';
import { Especialidad } from '../modelos/Especialidad';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/rimbeiro/veterinarios';

  getVeterinarios(){
    return this.http.get<Veterinario[]>(this.url);
  }

  createVeterinario(veterinario:Veterinario){
    return this.http.post<Veterinario>(this.url, veterinario);
  }

  getVeterinarioId(id:number){
    return this.http.get<Veterinario>(this.url+"/"+id);
  }

  updateVeterinario(veterinario:Veterinario){
    return this.http.put<Veterinario>(this.url, veterinario);
  }

  deleteVeterinario(veterinario:Veterinario){
    return this.http.delete<Veterinario>(this.url+"/"+veterinario.idVeterinario);
  }
}
