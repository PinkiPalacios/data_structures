// Árbol binario

// Implementar un árbol binario que realice las sigiuentes operaciones:
// Insertar un elemento.
// Borrar un elemento.
// Buscar un elemento.

class node {

	constructor (data,left,right){
		this.data=data;
		this.left=left;
		this.right=left;


	}

	esHoja (){
		if (this.left==null && this.right==null){
			return true;
		}else{
			return false;
		}


	}

	soloDerecho (){
		if (this.right != null && this.left == null){
			return true
		}else {
			return false;
		}

	}

	soloIzquierdo (){
		if (this.left != null && this.right == null){
			return true

		}else{
			return false;
		}
	}
}
class tree {


	constructor (){
		this.root=null;
		this.height=0;
	}

	insert (valor, nodo){
		var nuevo=new node(valor);
		//console.log(nodo)
		if (this.root==null){
			this.root=nuevo;
			return this.root;

		} 
		else if ( valor < nodo.data ){

			if (!nodo.left){

				//console.log("que pasa")
				nodo.left=nuevo;
				return nodo;

			}else {

				return this.insert(valor, nodo.left)

			}

		}else if ( valor>nodo.data ){
			if (!nodo.right){
				nodo.right=nuevo;
				return nodo;
			}else{
				return this.insert(valor, nodo.right)
			}

		}


	}

	buscar (value, nodo){
		if (nodo!=null && nodo.data== value){
			return nodo;
		}else if (nodo ==null){
			return false
		}else {

			return this.buscar(value, nodo.left) || this.buscar(value, nodo.right)
		}


	}


	borrar (value, nodo){
			
		if (this.root.esHoja ()){

			this.root==null
			return nodo;
		}
		else {
		var pareja= this.buscarPadre(value, nodo);
		console.log("paredddddddddddddddddja", pareja)
		return validar(pareja);
		}



	}

	validar (pareja){
		var hijo= pareja.hijo;
		var padre= pareja.nodo;

		if (hijo.esHoja){
			if (hijo.data< padre.data){
				padre.left=null;
				return hijo;
			}else {
				padre.right=null;
				return hijo;
			}
		}else if (hijo.soloIzquierdo && hijo.soloDerecho){
			return eliminar2(padre,hijo);
		}else if (!esHoja){
			return eliminar3 (padre,hijo);
		}

	}

	eliminar2(padre, hijo){
		if (hijo.data< padre.data){
			if(hijo.soloIzquierdo){
				padre.left=hijo.left;
			}else{
				padre.left=hijo.right;
			}
		}
	}

	eliminar3(padre,hijo){
		// Este es un caso algo complejo, tenemos que tomar el hijo derecho del Nodo que queremos eliminar y recorrer hasta el hijo más a
		//  la izquierda ( hijo izquierdo y si este tiene hijo izquierdo repetir hasta llegar al último nodo a la izquierda), 
		//  reemplazamos el valor del nodo que queremos eliminar por el nodo que encontramos ( el hijo más a la izquierda ), 
		//  el nodo que encontramos por ser el más a la izquierda es imposible que tenga nodos a su izquierda pero si que es 
		//  posible que tenga un subárbol a la derecha, para terminar solo nos queda proceder a eliminar este nodo de las formas que
		//   conocemos ( caso 1, caso 2 ) y tendremos la eliminación completa.



	}
	// buscarPadre (value, nodo){

	






	// 	if (nodo.left!=null nodo.left.data== value){
	// 		return {nodo:nodo, hijo: nodo.left};
	// 	}else if (nodo.right.dada == value){
	// 		return {nodo:nodo, hijo:nodo.right};
	// 	}else if (nodo.left.dada< value){
	// 		return this.buscarPadre(value, nodo.left)
	// 	}else {return this.buscarPadre(value, nodo.right) }


	// }

	remove (data){

		return this.removeNode(this.root, data);
	}

	removeNode(nodo ,data){
		if (nodo== null){
			return null;
		}
		if (data==nodo.data){
			if (nodo.left== null && nodo.right== null){
				return null;
			}else if (nodo.left!= null && nodo.right== null){
				return nodo.right;
			}else if(nodo.left== null && nodo.right!= null){
				return nodo.left; 
			}
			var aux= this.getMenor(nodo.right)
			nodo.data=aux.data;
			nodo.right=this.removeNode(nodo.right,aux.data)
			return nodo;



		}else if (data< nodo.data){
			nodo.left=this.removeNode(nodo.left, data)
			return nodo

		}else {
			nodo.right=this.removeNode(nodo.right.data)
			return nodo
		}
	}

	getMenor (){
		var current = this.root;
		while (!(current.left==null)){
			current=current.left
		}
		return current;
	}

	minDepth(nodo) {
  	if (typeof nodo === 'undefined') {
    return 0;
  	}
  		return 1 + Math.min(this.minDepth(nodo.left), this.minDepth(nodo.right));
	}

	 maxDepth(nodo) {
  if (typeof nodo === 'undefined') {
    return 0;
  }
  return 1 + Math.max(this.maxDepth(nodo.left), this.maxDepth(nodo.right));
	}

 isBinaryTreeBalanced(root) {
  if (typeof root === 'undefined') {
    return undefined;
  }
  return this.maxDepth(root) - this.minDepth(root) <= 1;
}





	isBalanced(){




	}


}






var arbol= new tree();

arbol.insert(2 , arbol.root);
arbol.insert(1 , arbol.root); 	
arbol.insert(3 , arbol.root);
arbol.insert(4, arbol.root);
console.log("busco raiz: ",arbol.buscar(2, arbol.root))
console.log("Busco 3: ",arbol.buscar(3, arbol.root))
console.log("Borro ",arbol.remove(2))

console.log("Reviso ",arbol)
console.log("Busco 3: ",arbol.buscar(3, arbol.root))
console.log (arbol.isBinaryTreeBalanced(arbol.root))





