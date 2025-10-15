/*Pide la edad de una persona.
Si es menor a 13 → “Eres un niño”.
Si tiene entre 13 y 17 → “Eres adolescente”.
Si tiene 18 o más → “Eres adulto”.*/
function verificarEtapa() {
    let edad = parseInt(prompt("Ingresa tu Edad"))
    if (edad < 13) {
        alert("Eres un niño")
    }
    else if (edad >= 13 && edad < 18) {
        alert("Eres Adolescente")
    }
    else {
        alert("Eres Adulto")
    }
}

/*Pide una contraseña.
Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.
Si no, muestra “Acceso denegado”.
 */
function validarContraseña() {
    let contraseña = prompt("Ingrese una contraseña")
    if (contraseña === "12345") {
        alert("Acceso permitido")
    }
    else {
        alert("Acceso denegado")
    }
}

/* Pide una palabra.
Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.
Si no → “No contiene la letra E”.
 */
function letraEnPalabra() {
    let palabra = prompt("Ingresa una palabra");
    let palabraMinuscula = palabra.toLocaleLowerCase();
    if (palabra.toLocaleLowerCase().includes('e')) {
        alert("La palabra contiene la letra E")
    }
    else {
        alert("No contiene la letra E")
    }
}
/*Pide dos números con prompt().
Si el primero es mayor → “El primer número es mayor”.
Si el segundo es mayor → “El segundo número es mayor”.
Si son iguales → “Son iguales”.
 */
function compararNumeros() {
    let num1 = parseFloat(prompt("Ingrese un Número"))
    let num2 = parseFloat(prompt("Ingrese otro Número"))
    if (num1 == num2) {
        alert("Son iguales")
    }
    else if (num1 > num2) {
        alert("El primer número es mayor")
    }
    else {
        alert("El segundo número es mayor")
    }
}
/*Pide un número.
Si el resto al dividir por 2 (% 2) es 0 → “Número par”.
Si no → “Número impar”.
*/
function verificarNumeroPar() {
    let numero = prompt("Ingrese un Número")
    if (numero % 2 == 0) {
        alert("Número par")
    }
    else {
        alert("Número impar")
    }
}
/* Si empieza con la letra “A” o “a” → “Empieza con A”.
Si no → “No empieza con A”.
*/
function verificarPalabra() {
    let palabraA = prompt("Ingrese Una Palabra");
    let palabraa = palabraA.toLocaleLowerCase();
    if (palabraA[0].toLocaleLowerCase() === ('a')) {
        alert("Empieza con A")
    }
    else {
        alert("No empieza con A")
    }
}
/*Pide una temperatura.
Si es menor a 10 → “Hace frío”.
Si es entre 10 y 25 → “Clima templado”.
Si es mayor o igual a 26 → “Hace calor”.
 */
function temperatura() {
    let temp = parseInt(prompt("Ingrese La Temperatura"))
    if (temp >= 26) {
        alert("Hace calor")
    }
    else if (temp >= 10 && temp <= 25) {
        alert("Clima templado")
    }
    else {
        alert("Hace Frío")
    }
}
/*Pide un nombre.
Si el nombre es “Dany” → “Hola, profesor 👋”.
Si el nombre es “Ely” → “Hola, mamá 🌷”.
En cualquier otro caso → “Hola, visitante”.
 */
function nombre() {
    let nombre = prompt("Ingrese Un Nombre")
    if (nombre == "Dany") {
        alert("Hola, profesor")
    }
    else if (nombre == "Ely") {
        alert("Hola, mamá")
    }
    else {
        alert("Hola, visitante")
    }
}
/*Pide una nota entre 1 y 7.
Si es 4 o más → “Aprobado”.
Si es menor que 4 → “Reprobado”.
Si está fuera del rango 1–7 → “Nota inválida”.
 */
function notas() {
    let nota = parseFloat(prompt("Ingrese Nota"))
    if (nota < 4) {
        alert("Reprobado")
    }
    else if (nota >= 4 && nota <= 7) {
        alert("Aprobado")
    }
    else {
        alert("Nota Invalida")
    }
}
/*Pide una frase.
Si incluye la palabra “Jesús” (mayúscula o minúscula) → “Tu frase tiene la palabra clave 🙌”.
Si no → “No contiene la palabra clave”.
 */
function verificarClave() {
    let frase = prompt("Ingrese Una Palabra")
    let fraseE = frase.toLocaleLowerCase()
    if (frase.toLowerCase().includes('jesús')) {
        alert("Tu frase tiene la palabra clave")
    }
    else {
        alert("No contiene la palabra clave")
    }
}
