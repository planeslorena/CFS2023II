import { Telefono } from "./telefono"

export class TelefonoConCamara extends Telefono {
    public constructor () {
        super();
    }

    public sacarFoto() {
        console.log("Imagen capturada");
    }
}
