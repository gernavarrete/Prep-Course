// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    // return (Object.entries(objeto));
    var array = [];
    for (let clave in objeto) {
      array.push([clave,objeto[clave]]); 
    }
    return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var object = {};
  for (i = 0; i < string.length; i++) {
    var x = 0;
    for (j = 0; j < string.length; j++) {
      if (string[i] === string[j]) {
        var x = x + 1;
      }
    }
    var object = Object.assign(object, {[string[i]]:x});
  }
  return object;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var x = '';
  var y = '';
  for (i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
        x = x + s[i];
    }
    else {
        y = y + s[i];
    }
  }
  return x + y;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var newWord = '';
  var finalword = '';
  var i = 0;
  while (i < str.length) {
    if (str[i] === ' '){
      var finalword = finalword + newWord + str[i];
      var newWord = '';
    }
    else {
      var newWord = str[i] + newWord;
    }
    i++;
  }
  return finalword + newWord;
  }


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var strnum = numero.toString();
  var longstr = strnum.length;
  var i = 0;
  while (i < longstr) {
    if (strnum[longstr -1] === strnum [i]) {
      longstr--;
      i++;
    }
    else {
      return 'No es capicua';
    }
  }
  return 'Es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var stringnew = cadena;
  var i = 0;
  while (i < cadena.length) {
    if ((cadena[i] === 'a') || (cadena[i] === 'b') || (cadena[i] === 'c')) {
      var stringnew = stringnew.replace(cadena[i],'');
      i++;
    }
    else {
      i++;
    }
  }
  return stringnew;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
var newarr = arr.sort((a,b) => a.length - b.length);
return newarr;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arrnew = [];
  for (var i = 0; i < arreglo1.length ; i++) {
    for (var j = 0; j < arreglo2.length ; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        arrnew.push(arreglo1[i]);
      }
    }
  }
  return arrnew;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

