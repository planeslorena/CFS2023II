class ElementoInput {
    private id: string;
    private className: string;
    private name: string;
    private value: string;
    private type: string;


    public constructor(id: string, className: string, name: string, value: string, type: string) {
        this.id = id;
        this.className = className;
        this.name = name;
        this.value = value;
        this.type = type;

    }

    public crearInput(): HTMLElement {
        let input = document.createElement("input");
        input.id = this.id;
        input.className = this.className;
        input.name = this.name;
        input.value = this.value;
        input.type = this.type;

        return input;
    }
}

function agregarElemento() {

    let divPrincipal = document.getElementById("principal");
    let objTexto1 = new ElementoInput("texto1", "control-text", "texto1", "hola mundo", "text");
    divPrincipal.appendChild(objTexto1.crearInput());
}
