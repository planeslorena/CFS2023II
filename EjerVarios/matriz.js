var Matriz = /** @class */ (function () {
    function Matriz(filas, columnas) {
        this.matriz = new Array(filas);
        for (var i = 0; i < filas; i++) {
            this.matriz[i] = new Array(columnas);
            for (var j = 0; j < columnas; j++) {
                this.matriz[i][j] = Math.round(Math.random() * 100);
            }
        }
    }
    Matriz.prototype.getValor = function (x, y) {
        return this.matriz[x][y];
    };
    return Matriz;
}());
var mat = new Matriz(2, 5);
console.log(mat);
var valor = mat.getValor(1, 4);
console.log(valor);
