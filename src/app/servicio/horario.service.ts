import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horario } from '../modelos/Horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/rimbeiro/horarios';

  getHorarios(){
    return this.http.get<Horario[]>(this.url);
  }
}
