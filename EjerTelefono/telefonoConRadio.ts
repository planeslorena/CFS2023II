import { Telefono } from "./telefono";

export class TelefonoConRadio extends Telefono {
    private frecuenciaActual: number;

    public constructor (frecuencia:number) {
        super();
        this.frecuenciaActual = frecuencia;
    }

    public verFrecuenciaActual(): number {
        return this.frecuenciaActual;
    }
}