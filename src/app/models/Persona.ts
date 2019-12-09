export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    dni: number;
    fechaNacimiento: Date;
    tipo: string;
    constructor (nombre: string, apellido: string, dni: number,fechaNacimiento: Date, tipo: string) {
        this.id = this.id++;
        this.nombre = nombre; 
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.tipo = tipo;
    }
}