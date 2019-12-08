export class Alquiler {
    id: number;
    fechaInicio: Date;
    fechaFin: Date;
    propiedadId: number;
    clienteId: number;
    constructor (fechaInicio: Date, fechaFin: Date, propiedadId: number, clienteId: number) {
        this.id = this.id ++ ; 
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.propiedadId = propiedadId;
        this.clienteId = clienteId;
    }
} 