export class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;

    public constructor() {
        this.estaPrendido = true;
        this.bateriaActual = 100;
    }

    public getBateriaActual(): number {
        return this.bateriaActual;
    }

    private setBateriaActual() {
        this.bateriaActual-= 10;
        if (this.bateriaActual == 0) {
            this.estaPrendido = false;
        }
    }

    public mandarMensaje(mensaje: string) {
        if (this.estaPrendido && this.bateriaActual > 0) {
            console.log(mensaje);
            this.setBateriaActual();
        } else {
            console.log('No es posible enviar el mensaje, el telefono se encuentra apagado.');
        }

    }

    public hacerLlamada(numTelefono:number) {
        if (this.estaPrendido && this.bateriaActual > 0) {
            console.log('LLamando al ' + numTelefono);
            this.setBateriaActual();
        } else {
            console.log('No es posible realizar llamados, el telefono se encuentra apagado.');
        }
    }

    public prenderApagar() {
        this.estaPrendido = !this.estaPrendido;
    }
}