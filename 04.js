/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  num=num.toString();
  var j=num.length-1;
  
  for (var i=0;i<num.length;i++ ){
    if( num[i]!= num[j]){
      return false;
      
      break;
    }else {
      j=j-1;
    }
   
    
  } return true;

}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico