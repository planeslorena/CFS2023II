class Automotor {
    private marca: string;
    private modelo:string;
    private patente:string;
    private anio: number;

    public constructor (marca: string, modelo:string, patente:string, anio:number) {
        this.modelo = modelo;
        this.marca = marca;
        this.patente = patente;
        this.anio = anio;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getMarca():string {
        return this.marca;
    }

    public getPatente():string {
        return this.patente;
    }

    public getAnio() :number {
        return this.anio;
    }
}

class registroAutomotor {
    private autos: Automotor[];

    public constructor () {
        this.autos = [];
    }

    public darDeAlta(auto: Automotor) :void{
        this.autos.push(auto);
    }

    public consultarAuto (patente: string) :void{
        this.autos.forEach((auto) => {
            if (auto.getPatente() == patente) {
                console.log (`La patente: ${patente} pertenece a un ${auto.getMarca()} - ${auto.getModelo()} del año ${auto.getAnio()} `)
            }
        })
    }

    public eliminarAuto (patente: string) :void {
        this.autos.forEach((auto, indice) => {
            if (auto.getPatente() == patente) {
                this.autos.splice(indice,1)
            }
        })
    }

    public listarAutos() :void {
        this.autos.forEach((auto, indice) => {
            console.log (`${indice+1} - ${auto.getMarca()} - ${auto.getModelo()} (${auto.getAnio()}) - Patente ${auto.getPatente()}`)
        })
    }
}

let automotor1 = new Automotor('Ford','Focus','AB765RT',2015);
let auto2 = new Automotor('Toyota','Corolla','AC695LJ',2018);
let auto3 = new Automotor('Peugeot','408','AF254CC',2020);
let auto4 = new Automotor('Citroen','C4','AA985KJ',2016);

let registro = new registroAutomotor();
registro.darDeAlta(automotor1);
registro.darDeAlta(auto2);
registro.darDeAlta(auto3);
registro.darDeAlta(auto4);
registro.listarAutos();

registro.eliminarAuto('AF254CC');
registro.listarAutos();