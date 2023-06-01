import { Veterinario } from "./Veterinario";

export class Horario{

    idHorario: number;
    diaSemana: string;
    horaInicio: string;
    horaFin: string;
    veterinario: Veterinario;
    estado: number;

    constructor(){
        this.idHorario=0;
        this.diaSemana="";
        this.horaInicio="";
        this.horaFin="";
        this.veterinario= new Veterinario();
        this.estado=0;
    }

}