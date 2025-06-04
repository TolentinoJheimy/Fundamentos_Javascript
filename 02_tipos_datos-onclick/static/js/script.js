console.log("conexion correcta");

// Declaración de variables
let colores = [" Rojo", " Azul", " Negro"];
let identidad = { nombre: "jheimy", correo: "jheimytolentino@liceovvh.cl", edad: 16 };
let esEstudiante = true;


// Funciones para mostrar cada valor con alert()
function mostrarColores() {
    alert("Colores :" + colores);
}

function mostrarIdentidad() {
    alert(JSON.stringify(identidad));
}

function mostrarEstudiante(){
    alert(esEstudiante)
}

function mostrarResumen() {
    alert("Hola, soy " + identidad.nombre + " tengo " + identidad.edad + " y mis colores favoritos son : " + colores);
}