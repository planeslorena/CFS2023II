var Automotor = /** @class */ (function () {
    function Automotor(marca, modelo, patente, anio) {
        this.modelo = modelo;
        this.marca = marca;
        this.patente = patente;
        this.anio = anio;
    }
    Automotor.prototype.getModelo = function () {
        return this.modelo;
    };
    Automotor.prototype.getMarca = function () {
        return this.marca;
    };
    Automotor.prototype.getPatente = function () {
        return this.patente;
    };
    Automotor.prototype.getAnio = function () {
        return this.anio;
    };
    return Automotor;
}());
var registroAutomotor = /** @class */ (function () {
    function registroAutomotor() {
        this.autos = [];
    }
    registroAutomotor.prototype.darDeAlta = function (auto) {
        this.autos.push(auto);
    };
    registroAutomotor.prototype.consultarAuto = function (patente) {
        this.autos.forEach(function (auto) {
            if (auto.getPatente() == patente) {
                console.log("La patente: ".concat(patente, " pertenece a un ").concat(auto.getMarca(), " - ").concat(auto.getModelo(), " del a\u00F1o ").concat(auto.getAnio(), " "));
            }
        });
    };
    registroAutomotor.prototype.eliminarAuto = function (patente) {
        var _this = this;
        this.autos.forEach(function (auto, indice) {
            if (auto.getPatente() == patente) {
                _this.autos.splice(indice, 1);
            }
        });
    };
    registroAutomotor.prototype.listarAutos = function () {
        this.autos.forEach(function (auto, indice) {
            console.log("".concat(indice + 1, " - ").concat(auto.getMarca(), " - ").concat(auto.getModelo(), " (").concat(auto.getAnio(), ") - Patente ").concat(auto.getPatente()));
        });
    };
    return registroAutomotor;
}());
var auto1 = new Automotor('Ford', 'Focus', 'AB765RT', 2015);
var auto2 = new Automotor('Toyota', 'Corolla', 'AC695LJ', 2018);
var auto3 = new Automotor('Peugeot', '408', 'AF254CC', 2020);
var auto4 = new Automotor('Citroen', 'C4', 'AA985KJ', 2016);
var registro = new registroAutomotor();
registro.darDeAlta(auto1);
registro.darDeAlta(auto2);
registro.darDeAlta(auto3);
registro.darDeAlta(auto4);
registro.listarAutos();
registro.eliminarAuto('AF254CC');
registro.listarAutos();
