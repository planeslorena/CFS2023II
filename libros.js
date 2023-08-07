"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(titulo, autor, editorial, anio, genero, idLibro) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.anio = anio;
        this.genero = genero;
        this.idLibro = idLibro;
    }
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Libro.prototype.getAnio = function () {
        return this.anio;
    };
    Libro.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    Libro.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    Libro.prototype.getIdLibro = function () {
        return this.idLibro;
    };
    Libro.prototype.setIdLibro = function (idLibro) {
        this.idLibro = idLibro;
    };
    return Libro;
}());
exports.Libro = Libro;
