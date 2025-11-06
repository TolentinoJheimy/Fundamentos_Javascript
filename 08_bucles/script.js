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
    for (let i = 1; i <= N; i++) {
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





