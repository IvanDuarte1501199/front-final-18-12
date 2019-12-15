export class Propiedad {
    id: number;
    nombre: string;
    ubicacion: string;
    descripcion: string;
    notas: string;
    precioXdia: number;
    dueñoId: number;
    constructor(nombre: string, ubicacion: string, descripcion: string, notas: string, precioXdia: number, dueñoId: number) {
        this.id = this.id++;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.descripcion = descripcion;
        this.notas = notas;
        this.precioXdia = precioXdia;
        this.dueñoId = dueñoId;
    }
}