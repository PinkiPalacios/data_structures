var assert = require('assert');

// Vamos a implementar pilas en Javascript:
// Implementa una pila usando listas enlazadas. Deberá tener la siguiente funcionalidad:
// insert(value): inserta el valor al final de la Pila.
// pop(): obtiene el último elemento de la Pila.
// getAll(): Lista todos los elementos de la Pila.
// len(): Devuelve el número de elementos en la Pila.
// Asegurate de saber en todo momento cuantos elementos hay en la pila.
// Usá la pila para revertir un arreglo.

class Node {
		constructor(data){
		this.data=data;
		this.next=null;
	}
}


class Pila {
	
	

	constructor (){
		this._length = 0,
		 this.head = null;
	}

	insert(value){
		var nuevo = new Node(value);
		if (this.head== null){
			this.head=nuevo
		}
		else {

			var aux=this.head;
			nuevo.next=aux;
			this.head=nuevo;
		}
		this._length++;
		// console.log("nuevo", nuevo)
		// console.log("uno", this.head)
		// console.log("dos", this.head.next)
		// console.log("tres", this.head.next)



	}

	pop (){
		var aux=this.head;
		if(this.head.next==null){
			
			this.head=null;
		

		}else {

			this.head=this.head.next;
		}

		this._length--;
		console.log("aux", aux)
		console.log("head", this.head)
		return aux.data;

	}

	len(){
		return this._length;
	}

	getAll (){
		var arr=[];
		var aux=this.head;
		for (var i = 0; i < this._length; i++) {
			arr.push(aux.data);
			aux=aux.next;
		}
		return arr;

	}

	invertir(arr){
		for (var i = 0; i < arr.length; i++) {
			this.insert(arr[i])
		}
		console.log(this.getAll())
		return this.getAll();
	}
}















var stack = new Pila();

// stack.insert(1);

// assert.equal(stack.pop(), 1, 'No funciona Pop');
// assert.equal(stack.len(), 0, 'No cuenta bien los elementos');

// stack.insert(1);
// stack.insert(2);
// stack.insert(3);
// console.log(stack.getAll());

// assert.equal(stack.len(), 3, 'No cuenta bien los elementos');

var array = [1, 2, 3, 4];

inversedArray = stack.invertir(array);
assert.deepEqual(inversedArray, [ 4, 3, 2, 1 ], 'No invierte bien.');