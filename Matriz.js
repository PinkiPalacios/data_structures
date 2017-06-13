// Implementar la clase Matriz, que es básicamente un arreglo de arreglos.
// Que pueda hacer las siguientes operaciones:
// Buscar un valor.
// Sumar matrices.
// Restar matrices.
// Multiplicar matrices.



class Matriz {
	constructor (rows, cols, val){
		this.grid = new Array ();
		this.rows=rows;
		this.cols=cols;


		


		for (var i = 0; i < rows; i++) {
			this.grid[i]= new Array(cols);
		}
		var fila=""

		if (val != null ){
		this.val=val;
		for (var i = 0; i < rows; i++) {
			for (var j = 0; j < cols; j++) {

					this.grid[i][j]=val.shift();
							
					fila= fila +" " +this.grid[i][j]
					
			}
			console.log(fila)
			fila=""
		}}


	}
	imprimir (){
		var fila=""



		for (var i = 0; i < this.rows; i++) {
			for (var j = 0; j < this.cols; j++) {

					
					fila= fila +" " +this.grid[i][j]
					
			}
			console.log(fila)
			fila=""
		}

	}


	buscoValor(val){

		for (var i = 0; i < this.rows; i++) {
			for (var i = 0; i < this.cols; i++) {
				if (this.grid[i][j]== val){
					return {i:i,j:j}

				}
			}
		}
		return null;


	}

	suma(mat1){

		var aux=new Matriz(mat1.rows,mat1.cols, null);

		for (var i = 0; i < this.rows; i++) {
			for (var j = 0; j < this.cols; j++) {
				aux.grid[i][j]=this.grid[i][j]+ mat1.grid[i][j]

				//console.log(this.grid[i][j]+ mat1.grid[i][j])
			}
		}


		return aux;
	}

	resta(mat1){

			var aux=new Matriz(mat1.rows,mat1.cols, null);

			for (var i = 0; i < this.rows; i++) {
				for (var j = 0; j < this.cols; j++) {
					aux.grid[i][j]=this.grid[i][j]- mat1.grid[i][j]

					//console.log(this.grid[i][j]+ mat1.grid[i][j])
				}
			}


			return aux;
		}

	

	multriplicar (mat1) {

		var aux=new Matriz(mat1.rows,mat1.cols, null);

		for (var i = 0; i < this.rows; i++) {
				for (var j = 0; j < this.cols; j++) {
					
					aux.grid[i][j]=this.calcular(i, j, mat1);
					
				}
			}

			return aux;
	}

	calcular (x,y, mat){

		var num=0;
		for (var i = 0; i < this.rows; i++) {
			num=num+(this.grid[x][i]*mat.grid[i][y]);
			console.log(num)
		}
		return num
	}


}




var mat1= new Matriz (3,2,[1,2,3,4,5,6,7,8,9])
console.log ("\n")
var mat2= new Matriz (2,2,[9,8,7,6,5,4,3,2,1])
console.log ("\n")
var mat3= mat1.multriplicar(mat2)
console.log ("\n")
mat3.imprimir();








