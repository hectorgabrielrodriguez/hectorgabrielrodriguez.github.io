
function evalua() {
    var cadena = document.getElementById('cadena').value;
    var resultParagraph = document.getElementById('result');
    var text;
    if (cadena.match(/[a-z]/) && cadena.match(/[A-Z]/)) {
      text=("la cadena de caracteres '") + cadena+ ("' contiene MAYUS y minusculas");
      document.getElementById("parrafo").innerHTML=text;

    } else if (cadena.match(/[a-z]/)) {
      text=("la cadena de caracteres '") + cadena + ("' contiene solamente minusculas");
      document.getElementById("parrafo").innerHTML=text;
    
    } else if (cadena.match(/[A-Z]/)) {
      text=("la cadena de caracteres '") + cadena + ("' contiene solamente MAYUSCULAS");
      document.getElementById("parrafo").innerHTML=text;

    } else {
      text=(" inserta caracter ");
      document.getElementById("parrafo").innerHTML=text;

    }
  }


  
  




