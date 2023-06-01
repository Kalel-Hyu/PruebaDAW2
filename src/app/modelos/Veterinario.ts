import { Especialidad } from "./Especialidad";

export class Veterinario{

    idVeterinario: number;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    especialidad: Especialidad;
    estado: number;

    constructor(){
        this.idVeterinario=0;
        this.nombres="";
        this.apellidoPaterno="";
        this.apellidoMaterno="";
        this.especialidad= new Especialidad();
        this.estado=0;
    }

}