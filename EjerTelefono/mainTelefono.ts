import { Telefono } from "./telefono";
import { TelefonoConCamara } from "./telefonoConCamara";
import { TelefonoConRadio } from "./telefonoConRadio";

let telefono1 = new Telefono();

let telefono2 = new TelefonoConCamara();

let telefono3 = new TelefonoConRadio(105.1);

console.log('la bateria es: '+telefono1.getBateriaActual()+'%');

console.log('------');
telefono2.mandarMensaje('sacate esa foto!!');
telefono2.sacarFoto();
console.log('la bateria es: '+telefono2.getBateriaActual()+'%');
console.log('------');

console.log('la frecuencia actual es: '+telefono3.verFrecuenciaActual());


