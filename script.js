let mascotas = [];
let dueños = [];
let id = 0;
let salir = false;
var menu = "Menu Principal\n1.Registrar Clientes\n2.Registrar Mascotas\n3.Lista de las Mascotas\n4.Buscar Mascotas\n5.Actualizar Estado de Salud\n6.Eliminar Mascota\n7.Ver Mascotas por Cliente\n8.Salir"

alert("Bienvenido");
setTimeout(() => {
    while (salir == false) {
        console.log(menu)
        let opcion = prompt("Ingresa una opción:")
        switch (opcion) {
            case "1":
                registrarDueño();
                break;
            case "2":
                verCliente();
                break;
            case "3":
                break;
            case "4":
                break;
            case "5":
                break;
            case "6":
                break;
            case "7":
                break;
            case "8":
                salir = true;
                break;
            default:
                alert("Ingrese una opcion valida");
        }
    }
}, 3000);


/*Funciones dueños*/

function registrarDueño() {
    let cedula = Number(prompt("Ingrese su cedula"));
    while (isNaN(cedula)) {
        cedula = Number(prompt("Formato no valido, ingrese nuevamente"))
    }
    let cedulaExiste = dueños.some(persona => persona.cedula === cedula);
    if (cedulaExiste == true) { alert("El cliente ya existe") } else {
        let nombre = prompt("Ingrese el nombre");
        while (nombre.length === 0) { nombre = prompt("No puede dejar este espacio vacio, ingrese nuevamente") };
        let telefono = Number(prompt("Ingrese su numero telefonico"));
        while (isNaN(telefono)) { telefono = Number(prompt("Numero invalida, intente nuevamente")) }
        let correoElectronico = prompt("Ingrese su correo electronico");
        while (!correoElectronico.includes("@")) { correoElectronico = prompt("Correo invalido, intenta nuevamente") };
        let dueño = {cedula: cedula, nombre: nombre, telefono: telefono, correo: correoElectronico };
        dueños.push(dueño);
        alert("Dueño guardado correctamente");
    }
}

