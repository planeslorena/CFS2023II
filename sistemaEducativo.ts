

class Alumno {
    private nombre: string;
    private dni: number;
    private nota: number;

    public constructor(nombre: string, dni: number, nota: number) {
        this.nombre = nombre;
        this.dni = dni;
        this.nota = nota;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getDni(): number {
        return this.dni;
    }

    public setDni(dni: number): void {
        this.dni = dni;
    }

    public getNota(): number {
        return this.nota;
    }

    public setNota(nota: number): void {
        this.nota = nota;
    }

    public consultarAprobado(): boolean {
        if (this.nota < 7) {
            return false;
        } else {
            return true;
        }
    }
}

class Profesor {
    private nombre: string;
    private dni: number;
    private materia: string;
    private alumnos: Alumno[];

    public constructor(nombre: string, dni: number, materia: string, alumnos: Alumno[]) {
        this.nombre = nombre;
        this.dni = dni;
        this.materia = materia;
        this.alumnos = alumnos; 
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getDni(): number {
        return this.dni;
    }

    public setDni(dni: number): void {
        this.dni = dni;
    }

    public getMateria(): string {
        return this.materia;
    }

    public setMateria(materia: string): void {
        this.materia = materia;
    }

    public getAlumnos(): Alumno[] {
        return this.alumnos;
    }

    public setAlumnos(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }
}

class Escuela {
    private nombre: string;
    alumnos: Alumno[];
    profesores: Profesor[];

    public constructor (nombre:string) {
         
    }
}