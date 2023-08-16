class Matriz {
    private matriz: number [][];
  
    public constructor(filas: number,columnas:number) {
        this.matriz = new Array (filas);
        for (let i = 0; i< filas; i++) {
            this.matriz[i] = new Array (columnas);
            for (let j= 0; j< columnas; j++) {
                this.matriz[i][j] = Math.round(Math.random() * 100);
            }
        }
    }
  
    public getValor(x: number, y: number): number {
      return this.matriz[x][y];
    }
  }
  
  let mat = new Matriz(2,5);
  console.log(mat);
  let valor = mat.getValor(1, 4);
  console.log(valor);

  