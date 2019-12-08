export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    dni: number;
    tipo: string;
    constructor (nombre: string, apellido: string, dni: number, tipo: string) {
        this.id = this.id++;
        this.nombre = nombre; 
        this.apellido = apellido;
        this.dni = dni;
        this.tipo = tipo;
    }
}