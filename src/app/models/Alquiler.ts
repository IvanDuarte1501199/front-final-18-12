export class Alquiler {
    id: number;
    fechaInicio: Date;
    fechaFin: Date;
    propiedadId: number;
    clienteId: number;
    porcentajeAcme: number;
    constructor (fechaInicio: Date, fechaFin: Date, propiedadId: number, clienteId: number,porcentajeAcme: number) {
        this.id = this.id ++ ; 
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.propiedadId = propiedadId;
        this.clienteId = clienteId;
        this.porcentajeAcme = porcentajeAcme;
    }
} 