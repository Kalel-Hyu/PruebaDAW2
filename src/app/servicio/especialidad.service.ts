import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especialidad } from '../modelos/Especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/rimbeiro/especialidades';

  getEspecialidad(){
    return this.http.get<Especialidad[]>(this.url);
  }

  createEspecialidad(especialidad:Especialidad){
    return this.http.post<Especialidad>(this.url,especialidad);
  }

  getEspecialidadId(idVeterinario:number){
    return this.http.get<Especialidad>(this.url+"/"+idVeterinario);
  }

  updateEspecialidad(especialidad:Especialidad){
    return this.http.put<Especialidad>(this.url,especialidad);
  }

  deleteEspecialidad(especialidad:Especialidad){
    return this.http.delete<Especialidad>(this.url+"/"+especialidad.idVeterinario);
  }
}
