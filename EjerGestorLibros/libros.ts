export class Libro {
    private titulo: string;
    private autor: string;
    private editorial: string;
    private anio: number;
    private genero: string;
    private idLibro: number;

    public constructor(titulo: string, autor: string, editorial: string, anio: number, genero: string, idLibro: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.anio = anio;
        this.genero = genero;
        this.idLibro = idLibro;
    }

    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }
    public getAutor(): string {
        return this.autor;
    }
    public setAutor(autor: string): void {
        this.autor = autor;
    }
    public getEditorial(): string {
        return this.editorial;
    }
    public setEditorial(editorial: string): void {
        this.editorial = editorial;
    }
    public getAnio(): number {
        return this.anio;
    }
    public setAnio(anio: number): void {
        this.anio = anio;
    }
    public getGenero(): string {
        return this.genero;
    }
    public setGenero(genero: string): void {
        this.genero = genero;
    }
    public getIdLibro(): number {
        return this.idLibro;
    }
    public setIdLibro(idLibro: number): void {
        this.idLibro = idLibro;
    }
}

