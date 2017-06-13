
// La clase Array ya está implementada en Javascript vamos a investigarla:
// Listar todas las operaciones que nos permite hace la clase array.
// Usemos un arreglos de números para calcular las siguientes propiedades estadísticas:
// Encontrar el mínimo número.
// Encontrar el máximo.
// Encontrar el total, o sea la suma de todos los elementos.
// Calcular el promedio.
// Calcular la Varianza y la desviación standard 😶.

var assert = require('assert');

// # Arreglos - Estadísticas

var array = [15, 47, 14, 42, 31,
81, 4, 14, 77, 82,
25, 13, 18, 14, 33,
10, 64, 43, 41, 5,
59, 31, 15, 80, 26,
66, 50, 35, 77, 46,
98, 26, 42, 8, 76,
60, 81, 78, 45, 86,
69, 37, 75, 76, 20,
32, 78, 4, 55, 8,
89, 62, 50, 13, 74,
94, 86, 51, 36, 42,
87, 17, 42, 25, 35,
90, 57, 77, 60, 29,
14, 60, 57, 81, 26,
46, 99, 47, 65, 61,
63, 15, 72, 38, 71,
67, 29, 72, 25, 33,
70, 63, 23, 33, 84,
91, 26, 31, 59, 1]


function min(arr) {
	// body...

	var min =arr[0]
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]<min){
			min= arr[i];
		}
	}
	console.log(min)
	return min;
}



function max(arr) {
	// body...

	var max =arr[0]
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]>max){
			max= arr[i];
		}
	}
	console.log(max)
	return max;
}


function total (arr){
	var acum=0;
	for (var i = 0; i < arr.length; i++) {
		acum=acum+arr[i];
	}
	console.log(acum)
	return acum;

}


function promedio (arr){
	var max=total(arr);

	 var media=max/arr.length;

	console.log(media);
	return media;


}


function varianza (arr){
	var media = promedio (arr);
	aux=[];
	for (var i = 0; i < arr.length; i++) {
		aux[i]= Math.pow(arr[i]-media, 2)
	}
	return promedio(aux);

}

function desvi (arr){
	var vari= Math.sqrt(varianza(arr));
	return vari;
}






// Mínimo
var minValue = min(array);
assert.equal(minValue, 1, 'Minimo no coincide');

// Maximo valor
var maxValue = max(array);
assert.equal(maxValue, 99, 'Maximo no coincide');

// Total
var totalValue = total(array);
assert.equal(totalValue, 4850, 'Total no coincide');

// Promedio
var avgValue = promedio(array);
assert.equal(avgValue, 48.50, 'Avg no coincide');

// Desviacion Standart
var stdValue = desvi(array);
console.log('std value',stdValue)
assert.ok((stdValue - 26.392233706149238) < 0.1, 'Std Deviation no coincide');

// Desviacion Standart
var stdValue1 = varianza(array);
assert.ok((stdValue1 - 696.55) < 0.1, 'Variance Deviation no coincide');