console.log("conexión con js establecida");

/*Edad para votar Solicita la edad del usuario mediante prompt().
 Muestra con alert() si puede votar (18 años o más) o no.*/
function edadVotar() {
    let edad = parseInt(prompt("Ingrese su Edad"));
    if (edad >= 18) {
        alert("puedes votar crack!!")
    }

    else {
        alert("no puedes votar")
    };


};
/* Contraseña válida
 Pide una contraseña con prompt(). Si es igual a "1234", muestra un mensaje de acceso permitido. En caso contrario, muestra acceso denegado.
*/
function contraseña() {

    let contraseña = parseInt(prompt("Ingrese la Contraseña"))
    let password = "1234"
    if (contraseña == password) {
        alert("ACCESO CONCEDIDO")
    }
    else {
        alert("ACCESO DENEGADO")
    }
}
/*Verificar par o impar
 Pide un número por prompt(). Evalúa si el número es par o impar y muestra el resultado con alert().
 */
function imparidadNum() {
    {
        let num = parseInt(prompt("Ingrese un Número"))
        if (num % 2 == 0) {
            alert("Es Un Número Par")
        }
        else {
            alert("Es Un Número Impar")
        }
    }
}
/*Temperatura ambiental
 Solicita la temperatura actual. Si es mayor o igual a 30, muestra “Hace calor”, de lo contrario muestra “Clima agradable”.
 */
function temperatura() {
    let temp = parseInt(prompt("Ingrese la Temperatura de Hoy"))
    if (temp >= 30) {
        alert("Hace Calor")
    }
    else if (temp >= 10) {
        alert("clima agradable")

    }
    else {
        alert("Clima helado")
    }

}
/*Comparar dos números
 Solicita dos números al usuario. Compara ambos y muestra cuál es mayor o si son iguales.
*/
function compNum() {
    let numOne = parseInt(prompt("ingrese un Número"));
    let numTwo = parseInt(prompt("Ingrese Un Segundo Número"));

    if (numOne < numTwo) {
        alert("El Número " + numOne + " es menor que " + numTwo)
    }
    else if (numOne == numTwo) {
        alert("El Número " + numOne + " es igual que " + numTwo)
    }
    else {
        alert("El Número " + numOne + " es mayor que " + numTwo)
    }
};
/* Calificación escolar
 Pide una nota entre 1 y 7. Si es 4 o más, muestra “Aprobado”, si es menor, muestra “Reprobado”.
*/
function calificacion() {
    let Calificacion = prompt("Ingrese Un Valor entre el 1 y el 7")
    if (Calificacion > 7) {
        alert("VALOR NO VALIDO")
    }
    else if (Calificacion >= 4) {
        alert("APROBADO!!, FELICIDADES")
    }
    else {
        alert("REPROBADO")
    }
};
/*Nombre de usuario válido
 Pide un nombre de usuario. Si el valor ingresado es "admin", muestra “Bienvenido, administrador”. Si no, muestra “Usuario no reconocido”.
*/
function usuarioAdm() {
    let usuario = prompt("Introduce una Palabra")
    if (usuario == "admin") {
        alert("Bienvenido, administrador")
    }
    else {
        alert("No puedes Ingresar")
    }


};

/*Verificar si una palabra empieza con "A"
 Pide una palabra al usuario. Verifica si empieza con la letra “A” mayúscula y muestra un mensaje acorde.
 */
function palabraA() {
    let palabra = prompt("Ingresa Alguna Palabra")
    if (palabra[0] == "A") {
        alert("TU PALABRA EMPIEZA CON A")
    }
    else (
        alert("TU PALABRA NO EMPIEZA CON A")
    )

};
/*Precio con descuento
 Solicita el precio de un producto. Si el precio es mayor a 10000, 
 muestra que aplica descuento.
  Si no, indica precio normal.*/
function descuento() {
    let number = parseInt(prompt("Ingrese El Precio del Producto"))
    if (number > 10000) {
        alert("Aplica descuento")
    }
    else if (number < 10000) {
        alert(" $ " + number)
    }
    else {
        alert("Valor No Valido")
    }
};
/*Verificar si una persona puede conducir
 Solicita la edad del usuario y si tiene licencia
  (por ejemplo, respondiendo "sí" o "no").
   Si tiene 18 o más y respondió que tiene licencia, muestra “Puede conducir”.
    Si no, muestra “No puede conducir”.
*/
function licencia() {
    let edad = parseInt(prompt("Ingresa Tu Edad"));
    let lice = prompt("Tiene Licencia?");

    if (edad >= 18 && lice == "si") {
        alert("Puede conducir")
    }
    else if (edad < 18 && lice == "no") {
        alert("No puede Conducir")
    }
    else {
        alert("ingresa valores válidos")
    }
};

/* Comparar la longitud de dos palabras
Solicita dos palabras con prompt(). Compara cuántas letras tiene cada una y muestra cuál es más larga o si tienen el mismo largo.
 */
function encontrarPalabraLarga() {
let pal1 = prompt("Ingrese primera palabra")
let pal2 = prompt("Ingrese segunda palabra")
if (pal1 == "" && pal2 == ""){
    alert("Ingrese algun valor para trabajar...")
} else if(pal1.length < pal2.length){
    alert(`La palabra más larga es ${pal2} con ${pal2.length} carácteres`)
} else if(pal1.length == pal2.length) {
    alert(`Las palabras ${pal2} y ${pal1} tienen mismo largo con : \n ${pal1.leght} carácteres`)
}
else{
    alert(`La palabra mas larga es ${pal1} con ${pal1.length} carácteres`)
}
}
/* 12.- Validar correo electrónico
Pide al usuario que ingrese un correo. Verifica si el texto contiene el símbolo @.
 Si lo tiene, muestra "Correo válido", si no, "Correo inválido". */
 function validarEmail() {
    let correo = prompt("Ingresa tu correo")
    if(correo.includes("@")){
        alert("Correo Válido")
    } else {
        alert("Correo Inválido")
    }
 }

 /*13.- Verificar si un número es positivo o negativo
Solicita un número. Muestra si es positivo, negativo o cero. */

function verificadorNumero(){
let numero =  parseInt(prompt("Ingrese un número: "))

if (numero > 0){
     alert("El número es positivo")
}
   
else if(numero < 0) {
    alert("El número es negativo")
}
    
    
else{
    alert("El número es cero")
}
}

/* 14.- Saludo personalizado según hora
Pide la hora actual (en formato 24 horas). Si es antes de las 12,
 muestra "Buenos días", si es entre 12 y 18, "Buenas tardes",
  y si es mayor a 18, "Buenas noches". */


function saludoPersonalizado(){
let hora = parseInt(prompt("Ingrese la Hora: "))
if (hora >= 0 && hora < 12) {
    alert("Buenos días");
} else if (hora >= 12 && hora < 18) {
    alert("Buenas tardes");
} else if (hora >= 18 && hora <= 23) {
    alert("Buenas noches");
}
}

/* 15.- Verificar si una palabra contiene la letra "e"
Solicita una palabra. Verifica si contiene la letra "e" (minúscula).
Si la tiene, muestra "Contiene la letra 'e'", 
si no, muestra "No contiene la letra 'e'". */
function verificarPalabra(){
const palabra = prompt("Ingrese una palabra:");
if (palabra.includes('e')) {
    alert("Contiene la letra 'e'");
} else {
    alert("No contiene la letra 'e'");
}
}   