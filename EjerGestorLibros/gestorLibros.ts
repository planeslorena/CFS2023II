import { Libro } from "./libros";
import * as readlineSync from 'readline-sync';


class GestorLibros {
    //Atributos
    private nombreBiblioteca: string;
    private libros: Libro[];
    private idLibro: number;

    public constructor(nombreBiblioteca: string) {
        this.nombreBiblioteca = nombreBiblioteca;
        this.libros = [];
        this.idLibro = 0;
    }

    //Metodos
    public insertarLibro() {
        console.log("---------------------------------------------------------")
        console.log("Ingrese los datos del libro que desea insertar:")
        let titulo: string = readlineSync.question("Titulo: ");
        let autor: string = readlineSync.question("Autor: ");
        let editorial: string = readlineSync.question("Editorial: ");
        let anio: number = readlineSync.questionInt("Año: ");
        let genero: string = readlineSync.question("Genero: ");
        this.idLibro++;
        let libro = new Libro(titulo, autor, editorial, anio, genero, this.idLibro);
        this.libros.push(libro);
        console.log(`Libro n° ${this.idLibro}: ${titulo} - ${autor} (Editorial ${editorial} - ${anio}) - Genero: ${genero} `);
    }

    public consultarLibro() {
        console.log("---------------------------------------------------------");
        console.log("Por cual criterio desea buscar?");
        console.log("1 - Titulo");
        console.log("2 - Autor");
        console.log("3 - Genero");
        console.log("4 - Numero de libro");

        let opcion: number = readlineSync.questionInt('Ingrese el numero de la opcion elegida: ');

        if (opcion == 1) {
            let tituloBuscado: string = readlineSync.question('Ingrese el titulo que desea buscar: ');
            for (let i = 0; i < this.libros.length; i++) {
                if (tituloBuscado.toLowerCase() == this.libros[i].getTitulo().toLowerCase()) {
                    console.log(`Libro n° ${this.libros[i].getIdLibro()}: ${this.libros[i].getTitulo()} - ${this.libros[i].getAutor()} (Editorial ${this.libros[i].getEditorial()} - ${this.libros[i].getAnio()}) - Genero: ${this.libros[i].getGenero()} `);
                }
            }
        } else if (opcion == 2) {
            let autorBuscado: string = readlineSync.question('Ingrese el autor que desea buscar: ');
            for (let i = 0; i < this.libros.length; i++) {
                if (autorBuscado.toLowerCase() == this.libros[i].getAutor().toLowerCase()) {
                    console.log(`Libro n° ${this.libros[i].getIdLibro()}: ${this.libros[i].getTitulo()} - ${this.libros[i].getAutor()} (Editorial ${this.libros[i].getEditorial()} - ${this.libros[i].getAnio()}) - Genero: ${this.libros[i].getGenero()} `);
                }
            }
        } else if (opcion == 3) {
            let generoBuscado: string = readlineSync.question('Ingrese el genero que desea buscar: ');
            for (let i = 0; i < this.libros.length; i++) {
                if (generoBuscado.toLowerCase() == this.libros[i].getGenero().toLowerCase()) {
                    console.log(`Libro n° ${this.libros[i].getIdLibro()}: ${this.libros[i].getTitulo()} - ${this.libros[i].getAutor()} (Editorial ${this.libros[i].getEditorial()} - ${this.libros[i].getAnio()}) - Genero: ${this.libros[i].getGenero()} `);
                }
            }
        } else if (opcion == 4) {
            let idBuscado: number = readlineSync.questionInt('Ingrese el numero de libro que desea buscar: ');
            for (let i = 0; i < this.libros.length; i++) {
                if (idBuscado == this.libros[i].getIdLibro()) {
                    console.log(`Libro n° ${this.libros[i].getIdLibro()}: ${this.libros[i].getTitulo()} - ${this.libros[i].getAutor()} (Editorial ${this.libros[i].getEditorial()} - ${this.libros[i].getAnio()}) - Genero: ${this.libros[i].getGenero()} `);
                }
            }
        }

    }

    //modificar
    public modificarLibro(idLibro: number) {
        for (let i = 0; i < this.libros.length; i++) {
            if (idLibro == this.libros[i].getIdLibro()) {
                console.log("---------------------------------------------------------");
                console.log('Que dato desea modificar?');
                console.log(`1 - Titulo:  ${this.libros[i].getTitulo()}`);
                console.log(`2 - Autor:  ${this.libros[i].getAutor()}`);
                console.log(`3 - Editorial:  ${this.libros[i].getEditorial()}`);
                console.log(`4 - Año:  ${this.libros[i].getAnio()}`);
                console.log(`5 - Genero:  ${this.libros[i].getGenero()}`);
                let opcion: number = readlineSync.questionInt('Ingrese el numero de opción:');

                if (opcion == 1) {
                    let nuevoTitulo: string = readlineSync.question('Ingrese el nuevo titulo: ');
                    this.libros[i].setTitulo(nuevoTitulo);
                } else if (opcion == 2) {
                    let nuevoAutor: string = readlineSync.question('Ingrese el nuevo autor: ');
                    this.libros[i].setAutor(nuevoAutor);
                } else if (opcion == 3) {
                    let nuevaEditorial: string = readlineSync.question('Ingrese la nueva editorial: ');
                    this.libros[i].setEditorial(nuevaEditorial);
                } else if (opcion == 4) {
                    let nuevoAnio: number = readlineSync.questionInt('Ingrese el nuevo año: ');
                    this.libros[i].setAnio(nuevoAnio);
                } else if (opcion == 5) {
                    let nuevoGenero: string = readlineSync.question('Ingrese el nuevo genero: ');
                    this.libros[i].setGenero(nuevoGenero);
                }
            }
        }

    }

    //eliminar
    public eliminarLibro(idLibro: number) {
        for (let i = 0; i < this.libros.length; i++) {
            if (idLibro == this.libros[i].getIdLibro()) {
                console.log("---------------------------------------------------------");
                console.log('Se eliminó el siguiente libro:');
                console.log(`1 - Titulo:  ${this.libros[i].getTitulo()}`);
                console.log(`2 - Autor:  ${this.libros[i].getAutor()}`);
                console.log(`3 - Editorial:  ${this.libros[i].getEditorial()}`);
                console.log(`4 - Año:  ${this.libros[i].getAnio()}`);
                console.log(`5 - Genero:  ${this.libros[i].getGenero()}`);

                this.libros.splice(i, 1);
            }
        }

    }

    public consultarListadoLibros() {
        console.log('---------------------------------------------------------');
        console.log(`Listado de la biblioteca: ${this.nombreBiblioteca}`);
        for (let i = 0; i < this.libros.length; i++) {
            console.log(`Libro n° ${this.libros[i].getIdLibro()}: ${this.libros[i].getTitulo()} - ${this.libros[i].getAutor()} (Editorial ${this.libros[i].getEditorial()} - ${this.libros[i].getAnio()}) - Genero: ${this.libros[i].getGenero()} `)
        }
    }

}

let biblioteca1 = new GestorLibros('Biblioteca Rivadavia');
biblioteca1.insertarLibro();
biblioteca1.insertarLibro();
biblioteca1.insertarLibro();
biblioteca1.consultarListadoLibros();
biblioteca1.consultarLibro();
biblioteca1.modificarLibro(1);
biblioteca1.eliminarLibro(1);
biblioteca1.consultarListadoLibros();
