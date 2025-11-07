//1
function datosPersona() {
    let nombre = prompt("Ingresa tu nombre:");
    let apellidos = prompt("Ingresa tus apellidos:");
    let edad = prompt("Ingresa tu edad:");
    alert("Nombre: " + nombre + " " + apellidos + "\nEdad: " + edad);
}

//2
function numDivididoentres() {
    let numero = parseFloat(prompt("Ingresa un número:"));
    let parte = numero / 3;
    let resultados = (parte + 10) * 2;
    alert("Resultado: " + resultados);
}

//3
function numCreciente() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (num1 < num2) {
        alert("Estado creciente");
    } else if (num1 > num2) {
        alert("Estado decreciente");
    } else {
        alert("Son iguales");
    }
}

//4
function promedio() {
    let suma1 = 0;
    for (let i = 1; i <= 5; i++) {
        let num = parseFloat(prompt("Ingresa el número " + i + ":"));
        suma1 += num;
    }
    let promedio = suma1 / 5;
    alert("El promedio es: " + promedio);
}

//5
function sumaNaturales() {
    let n2 = parseInt(prompt("Ingresa el valor de N:"));
    let adicion = 0;
    for (let i = 1; i <= n2; i++) {
        adicion += i;
    }
    alert("La suma de los " + n2 + " primeros números es: " + adicion);
}
//6
function numPares() {
    for (let i = 1; i <= 100; i++) {
        alert(i * 2);
    }
}

//7
function numImpares() {
    for (let i = 0; i < 100; i++) {
        alert(i * 2 + 1);
    }
}

//8
function sumaNum5() {
    let sma = 0;
    for (let i = 1; i <= 5; i++) {
        let num = parseFloat(prompt("Ingresa número " + i + ":"));
        sma += num;
    }
    alert("La suma total es: " + sma);
}

//9
function sumaNumTeclado() {
    let n = parseInt(prompt("¿Cuántos números deseas sumar?"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        let num = parseFloat(prompt("Ingresa número " + i + ":"));
        suma += num;
    }
    alert("La suma de los " + n + " números es: " + suma);
}


//10
function resultadoUser() {
    let a = parseFloat(prompt("Ingresa el primer número:"));
    let b = parseFloat(prompt("Ingresa el segundo número:"));
    let opcion = prompt("Elige una operación: sumar, restar, multiplicar o dividir");
    let resultado;
    if (opcion === "sumar") {
        resultado = a + b;
    } else if (opcion === "restar") {
        resultado = a - b;
    } else if (opcion === "multiplicar") {
        resultado = a * b;
    } else if (opcion === "dividir") {
        resultado = a / b;
    } else {
        alert("Opción no válida");
    }
    alert("El resultado es: " + resultado);
}
//11
function sumaNPares() {
    let N = parseInt(prompt("¿Cuántos números pares deseas ingresar?"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        let num = parseInt(prompt("Ingresa número par " + i + ":"));
        if (num % 2 === 0) {
            suma += num;
        } else {
            alert("No es par, no se suma.");
        }
    }
    alert("La suma total de números pares es: " + suma);
}
//12
function sumaPrimerosPares() {
    let N = parseInt(prompt("Ingresa la cantidad de pares a sumar:"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += i * 2;
    }
    alert("La suma de los " + N + " primeros pares es: " + suma);
}
//13
function sumaNImpares() {
    let N = parseInt(prompt("¿Cuántos números impares deseas ingresar?"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        let num = parseInt(prompt("Ingresa número impar " + i + ":"));
        if (num % 2 !== 0) {
            suma += num;
        } else {
            alert("No es impar, no se suma.");
        }
    }
    alert("La suma total de números impares es: " + suma);
}
//14
function sumaPrimerosImpares() {
    let N = parseInt(prompt("Ingresa la cantidad de impares a sumar:"));
    let suma = 0;
    for (let i = 0; i < N; i++) {
        suma += i * 2 + 1;
    }
    alert("La suma de los " + N + " primeros impares es: " + suma);
}
//15
function sumaMultiplos3() {
    let N = parseInt(prompt("Ingresa la cantidad de múltiplos de 3 a sumar:"));
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += i * 3;
    }
    alert("La suma de los " + N + " primeros múltiplos de 3 es: " + suma);
}
//16
function factorialN() {
    let N = parseInt(prompt("Ingresa un número para calcular su factorial:"));
    let factorial = 1;
    for (let i = 1; i <= N; i++) {
        factorial *= i;
    }
    alert("El factorial de " + N + " es: " + factorial);
}
//17
function celsiusAFahrenheit() {
    let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
    let fahrenheit = (celsius * 9 / 5) + 32;
    alert(celsius + "°C equivalen a " + fahrenheit + "°F");
}
//18
function contarCaracteres() {
    let texto = prompt("Ingresa una cadena de texto:");
    let contador = {};
    for (let char of texto) {
        contador[char] = (contador[char] || 0) + 1;
    }
    console.log(contador);
    alert("Revisa la consola para ver el conteo de caracteres.");
}





