let mascotas = [{ idMascota: 5, nombre: "miau", especie: "gato", edad: 1, peso: 1, estado: "sano", idDueño: 4, dueño: 123 }];
let dueños = [{ id: 4, cedula: 123, nombre: "felipe", telefono: 123, correo: "sad@", mascotas: [5] }];
let id = 0;
let idMascota = 0;
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
                registrarMascota();
                break;
            case "3":
                listaMascotas();
                break;
            case "4":
                mascotaNombre()
                break;
            case "5":
                actualizarEstado()
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
        let dueño = { id: id, cedula: cedula, nombre: nombre, telefono: telefono, correo: correoElectronico, mascotas: [] };
        dueños.push(dueño);
        id++;
        alert("Dueño guardado correctamente");
    }
}

/*funciones mascotas*/

function registrarMascota() {
    let cedula = Number(prompt("Ingrese la cedula del dueño"));
    let cedulaExiste = dueños.find(dueño => dueño.cedula === cedula);
    let index = dueños.indexOf(cedulaExiste);
    if (!cedulaExiste) { alert("El cliente no existe"); return; } else {
        let nombre = prompt("Ingrese el nombre");
        while (nombre.length === 0) { nombre = prompt("No puede dejar este espacio vacio, ingrese nuevamente") };
        let especie = prompt("Ingrese la especie");
        while (especie.length === 0) { especie = prompt("No puede dejar este espacio vacio, ingrese nuevamente") };
        let edad = Number(prompt("Ingrese la edad"));
        while (isNaN(edad) || edad <= 0) { edad = Number(prompt("Numero invalido, intente nuevamente")) }
        let peso = Number(prompt("Ingrese el peso"));
        while (isNaN(peso) || peso <= 0) { peso = Number(prompt("Numero invalido, intente nuevamente")) }
        let estado = prompt("Ingresa el estado de salud(sano/enfermo/tratamiento)");
        estado = estado.toLowerCase();
        while (estado != "sano" && estado != "enfermo" && estado != "tratamiento") { alert("Estado invalido"); estado = prompt("Ingresa el estado de salud(sano/enfermo/tratamiento)"); estado = estado.toLowerCase(); }
        let idDueño = dueños[index].id;
        let mascota = { idMascota: idMascota, nombre: nombre, especie: especie, edad: edad, peso: peso, estado: estado, idDueño: idDueño, dueño: cedula };
        mascotas.push(mascota);
        dueños[index].mascotas.push(idMascota)
        idMascota++;
        alert("Se registró la mascota exitosamente")
    }
}

function listaMascotas() { console.table(mascotas) }

function mascotaNombre() {
    let nombre = prompt("Ingrese el nombre de su mascota");
    let mascotaExiste = mascotas.find(mascota => mascota.nombre === nombre);
    let index = mascotas.indexOf(mascotaExiste);
    if (!mascotaExiste) { alert("La mascota no existe"); return } else {
        for (let clave in mascotas[index]) { console.log(clave + ":" + mascotas[index][clave]) }
    }
}

function actualizarEstado() {
    let nombre = prompt("Ingrese el nombre de su mascota");
    let mascotaExiste = mascotas.find(mascota => mascota.nombre === nombre);
    let index = mascotas.indexOf(mascotaExiste);
    if (!mascotaExiste) { alert("La mascota no existe"); return } else {
        let estado = prompt("Ingresa el estado de salud(sano/enfermo/tratamiento)");
        estado = estado.toLowerCase();
        while (estado != "sano" && estado != "enfermo" && estado != "tratamiento") { alert("Estado invalido"); estado = prompt("Ingresa el estado de salud(sano/enfermo/tratamiento)"); estado = estado.toLowerCase(); }
        mascotas[index].estado = estado
        alert("Estado actualizado correctamente")
    }

}

function eliminarMascota() {
    let nombre = promp("Ingrese el nombre de su mascota")
    let index = mascotas.findIndex(mascota => mascota.nombre === nombre);
    if (index !== -1) {
        let indexid = mascotas[index].idMascota;
        let indexdueño = dueños.findIndex(dueño => dueño.mascotas.indexOf(indexid));
        dueños.index
        dueños.
        mascotas.splice(index, 1);

    }else{alert("Mascota no encontrada")}}