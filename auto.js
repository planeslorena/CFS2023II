var Auto = /** @class */ (function () {
    function Auto() {
        this.encendido = true;
        this.velocidad = 0;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.encendido) {
            this.encendido = false;
        }
        else {
            this.encendido = true;
        }
    };
    Auto.prototype.acelerar = function (velocidad) {
        this.velocidad += velocidad;
    };
    Auto.prototype.frenar = function (velocidad) {
        if (this.velocidad > velocidad) {
            this.velocidad -= velocidad;
        }
        else {
            this.velocidad = 0;
        }
    };
    return Auto;
}());
var auto1 = new Auto;
auto1.acelerar(20);
console.log(auto1);
auto1.frenar(10);
console.log(auto1);
