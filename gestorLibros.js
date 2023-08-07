"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var libros_1 = require("./libros");
var readlineSync = require("readline-sync");
var GestorLibros = /** @class */ (function () {
    function GestorLibros(nombreBiblioteca) {
        this.nombreBiblioteca = nombreBiblioteca;
        this.libros = [];
        this.idLibro = 0;
    }
    //Metodos
    GestorLibros.prototype.insertarLibro = function () {
        console.log("---------------------------------------------------------");
        console.log("Ingrese los datos del libro que desea insertar:");
        var titulo = readlineSync.question("Titulo: ");
        var autor = readlineSync.question("Autor: ");
        var editorial = readlineSync.question("Editorial: ");
        var anio = readlineSync.questionInt("Año: ");
        var genero = readlineSync.question("Genero: ");
        this.idLibro++;
        var libro = new libros_1.Libro(titulo, autor, editorial, anio, genero, this.idLibro);
        this.libros.push(libro);
        console.log("Libro n\u00B0 ".concat(this.idLibro, ": ").concat(titulo, " - ").concat(autor, " (Editorial ").concat(editorial, " - ").concat(anio, ") - Genero: ").concat(genero, " "));
    };
    GestorLibros.prototype.consultarLibro = function () {
        console.log("---------------------------------------------------------");
        console.log("Por cual criterio desea buscar?");
        console.log("1 - Titulo");
        console.log("2 - Autor");
        console.log("3 - Genero");
        console.log("4 - Numero de libro");
        var opcion = readlineSync.questionInt('Ingrese el numero de la opcion elegida: ');
        if (opcion == 1) {
            var tituloBuscado = readlineSync.question('Ingrese el titulo que desea buscar: ');
            for (var i = 0; i < this.libros.length; i++) {
                if (tituloBuscado.toLowerCase() == this.libros[i].getTitulo().toLowerCase()) {
                    console.log("Libro n\u00B0 ".concat(this.libros[i].getIdLibro(), ": ").concat(this.libros[i].getTitulo(), " - ").concat(this.libros[i].getAutor(), " (Editorial ").concat(this.libros[i].getEditorial(), " - ").concat(this.libros[i].getAnio(), ") - Genero: ").concat(this.libros[i].getGenero(), " "));
                }
            }
        }
        else if (opcion == 2) {
            var autorBuscado = readlineSync.question('Ingrese el autor que desea buscar: ');
            for (var i = 0; i < this.libros.length; i++) {
                if (autorBuscado.toLowerCase() == this.libros[i].getAutor().toLowerCase()) {
                    console.log("Libro n\u00B0 ".concat(this.libros[i].getIdLibro(), ": ").concat(this.libros[i].getTitulo(), " - ").concat(this.libros[i].getAutor(), " (Editorial ").concat(this.libros[i].getEditorial(), " - ").concat(this.libros[i].getAnio(), ") - Genero: ").concat(this.libros[i].getGenero(), " "));
                }
            }
        }
        else if (opcion == 3) {
            var generoBuscado = readlineSync.question('Ingrese el genero que desea buscar: ');
            for (var i = 0; i < this.libros.length; i++) {
                if (generoBuscado.toLowerCase() == this.libros[i].getGenero().toLowerCase()) {
                    console.log("Libro n\u00B0 ".concat(this.libros[i].getIdLibro(), ": ").concat(this.libros[i].getTitulo(), " - ").concat(this.libros[i].getAutor(), " (Editorial ").concat(this.libros[i].getEditorial(), " - ").concat(this.libros[i].getAnio(), ") - Genero: ").concat(this.libros[i].getGenero(), " "));
                }
            }
        }
        else if (opcion == 4) {
            var idBuscado = readlineSync.questionInt('Ingrese el numero de libro que desea buscar: ');
            for (var i = 0; i < this.libros.length; i++) {
                if (idBuscado == this.libros[i].getIdLibro()) {
                    console.log("Libro n\u00B0 ".concat(this.libros[i].getIdLibro(), ": ").concat(this.libros[i].getTitulo(), " - ").concat(this.libros[i].getAutor(), " (Editorial ").concat(this.libros[i].getEditorial(), " - ").concat(this.libros[i].getAnio(), ") - Genero: ").concat(this.libros[i].getGenero(), " "));
                }
            }
        }
    };
    //modificar
    GestorLibros.prototype.modificarLibro = function (idLibro) {
        for (var i = 0; i < this.libros.length; i++) {
            if (idLibro == this.libros[i].getIdLibro()) {
                console.log("---------------------------------------------------------");
                console.log('Que dato desea modificar?');
                console.log("1 - Titulo:  ".concat(this.libros[i].getTitulo()));
                console.log("2 - Autor:  ".concat(this.libros[i].getAutor()));
                console.log("3 - Editorial:  ".concat(this.libros[i].getEditorial()));
                console.log("4 - A\u00F1o:  ".concat(this.libros[i].getAnio()));
                console.log("5 - Genero:  ".concat(this.libros[i].getGenero()));
                var opcion = readlineSync.questionInt('Ingrese el numero de opción:');
                if (opcion == 1) {
                    var nuevoTitulo = readlineSync.question('Ingrese el nuevo titulo: ');
                    this.libros[i].setTitulo(nuevoTitulo);
                }
                else if (opcion == 2) {
                    var nuevoAutor = readlineSync.question('Ingrese el nuevo autor: ');
                    this.libros[i].setAutor(nuevoAutor);
                }
                else if (opcion == 3) {
                    var nuevaEditorial = readlineSync.question('Ingrese la nueva editorial: ');
                    this.libros[i].setEditorial(nuevaEditorial);
                }
                else if (opcion == 4) {
                    var nuevoAnio = readlineSync.questionInt('Ingrese el nuevo año: ');
                    this.libros[i].setAnio(nuevoAnio);
                }
                else if (opcion == 5) {
                    var nuevoGenero = readlineSync.question('Ingrese el nuevo genero: ');
                    this.libros[i].setGenero(nuevoGenero);
                }
            }
        }
    };
    //eliminar
    GestorLibros.prototype.eliminarLibro = function (idLibro) {
        for (var i = 0; i < this.libros.length; i++) {
            if (idLibro == this.libros[i].getIdLibro()) {
                console.log("---------------------------------------------------------");
                console.log('Se eliminó el siguiente libro:');
                console.log("1 - Titulo:  ".concat(this.libros[i].getTitulo()));
                console.log("2 - Autor:  ".concat(this.libros[i].getAutor()));
                console.log("3 - Editorial:  ".concat(this.libros[i].getEditorial()));
                console.log("4 - A\u00F1o:  ".concat(this.libros[i].getAnio()));
                console.log("5 - Genero:  ".concat(this.libros[i].getGenero()));
                this.libros.splice(i, 1);
            }
        }
    };
    GestorLibros.prototype.consultarListadoLibros = function () {
        console.log('---------------------------------------------------------');
        console.log("Listado de la biblioteca: ".concat(this.nombreBiblioteca));
        for (var i = 0; i < this.libros.length; i++) {
            console.log("Libro n\u00B0 ".concat(this.libros[i].getIdLibro(), ": ").concat(this.libros[i].getTitulo(), " - ").concat(this.libros[i].getAutor(), " (Editorial ").concat(this.libros[i].getEditorial(), " - ").concat(this.libros[i].getAnio(), ") - Genero: ").concat(this.libros[i].getGenero(), " "));
        }
    };
    return GestorLibros;
}());
var biblioteca1 = new GestorLibros('Biblioteca Rivadavia');
biblioteca1.insertarLibro();
biblioteca1.insertarLibro();
biblioteca1.insertarLibro();
biblioteca1.consultarListadoLibros();
biblioteca1.consultarLibro();
biblioteca1.modificarLibro(1);
biblioteca1.eliminarLibro(1);
biblioteca1.consultarListadoLibros();
