var ElementoInput = /** @class */ (function () {
    function ElementoInput(id, className, name, value, type) {
        this.id = id;
        this.className = className;
        this.name = name;
        this.value = value;
        this.type = type;
    }
    ElementoInput.prototype.crearInput = function () {
        var input = document.createElement("input");
        input.id = this.id;
        input.className = this.className;
        input.name = this.name;
        input.value = this.value;
        input.type = this.type;
        return input;
    };
    return ElementoInput;
}());
function agregarElemento() {
    var divPrincipal = document.getElementById("principal");
    var objTexto1 = new ElementoInput("texto1", "control-text", "texto1", "hola mundo", "text");
    divPrincipal.appendChild(objTexto1.crearInput());
}
