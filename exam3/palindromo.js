
function palindromo(cadena) {
    var resultado = "La frase \""+cadena+"\" ";
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split("");
    var cadenaSinEspacios = "";
    // Eliminar espacios de la cadena
    for(i in letrasEspacios) {
        if(letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
    var iguales = true;
    // Comparar la cadena con su reverso
    for(i in letras) {
        if(letras[i] != letrasReves[i]) {
            iguales = false;
        }
    }
    // Generar el resultado
    if(iguales) {
        resultado += " es un palíndromo";
    }
    else {
        resultado += " no es un palíndromo";
    }
    return resultado;
}

/**
 * Función para obtener el valor del cuadro de texto y evaluarlo.
 */
function evaluarPalindromo() {
    // Obtener el valor del cuadro de texto
    var cad = document.getElementById('frase').value;
    // Evaluar si es un palíndromo
    var resultado = palindromo(cad);
    // Mostrar el resultado en el párrafo
    document.getElementById('resultado').innerHTML = resultado;
}
