// Implementar una clase Lista que tenga las siguientes operaciones:
// getAll() : Muestra todos los elementos de la lista.
// get(index): Lista el enésimo elemento de la lista.
// insert(value): Insertar un nodo al comienzo de la lista.
// get(): Sacar un nodo del comienzo de la lista.
// pop(): Sacar un nodo del final de la lista.
// find(value): Buscar un nodo con valor value, si existe lo devuelve, si no existe devuelve null.

var assert = require('assert');

class Node {
		constructor(data){
		this.data=data;
		this.next=null;
	}
}


class Lista {
	
	

	constructor (){
		this._length = 0,
		 this.head = null;
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

	get(index){
		//console.log("wwwwwwwwwwwwwwtttttttttttffffffffffff")
		var aux=this.getAll();
		console.log("Aquiiii",aux[index])
		return aux[index];
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
		console.log("nuevo", nuevo)
		console.log("uno", this.head)
		console.log("dos", this.head.next)
		console.log("tres", this.head.next)



	}

	get1 (){
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

	pop (){
		var aux = this.head;
		while (aux.next.next !=null){
			aux=aux.next;
		}
		var aux2=aux.next;
		aux.next=null;
		this._length--;
		//console.log("POOP",aux2)
		return aux2.data;


	}

	find (value){

		for (var i = 0; i < this._length; i++) {
			console.log ("OJOOO", this.get(i))
			if (this.get(i)== value){


				return (i);
			}
		}
		console.log("retorno")
		return null;
	}

}









var lista = new Lista();

lista.insert(1);
lista.insert(2);
lista.insert(3);
lista.insert(4);
console.log ("llegue")
 //4 3 2 1

assert.equal(lista.get(0), 4, 'No encontró el primer elemento');
assert.equal(lista.get(3), 1, 'No encontró el ultimo elemento');

assert.equal(lista.get1(), 4, 'No sacó bien el primero');

assert.equal(lista.pop(), 1, 'No sacó bien el último');
console.log("lista", lista.getAll(), "tamano"+ lista._length)
assert.equal(lista.find(2), 1, 'No busca bien');
assert.equal(lista.find(4), null, 'No busca bien');