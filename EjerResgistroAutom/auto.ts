class Auto {
    private encendido: boolean;
    private velocidad:number;

    public constructor(){
        this.encendido= true;
        this.velocidad= 0;
    }

    public encenderApagar () {
        //SE PUEDE HACER MAS CORTO!!
        //this.encendido = !this.encendido
        if (this.encendido) {
            this.encendido = false;
        } else {
            this.encendido = true;
        }
    }

    public acelerar(velocidad: number):void {
        this.velocidad += velocidad;
    }

    public frenar(velocidad: number):void{
        if (this.velocidad > velocidad) {
            this.velocidad -= velocidad;
        } else {
            this.velocidad = 0;
        }
    }
}

let auto1 = new Auto;
auto1.acelerar(20);
console.log(auto1);
auto1.frenar(10);
console.log(auto1);

