
    let nombreUsuario = prompt("Ingrese su nombre");
    while(nombreUsuario === ""){
        nombreUsuario = prompt("Ingrese su nombre")
    }

function solicitarNombre() {
    alert("Bienvenido " + nombreUsuario + ". Gracias por visitarnos.")
}

function elegirLampara() {
    let Lampara;
    do {
       Lampara = parseInt(prompt("Ingrese el tipo de lampara.\n\nEjemplo seleccione '1' para Techo.\n\n1- Techo\n2- Pared\n3- Exterior"));
    } while (Lampara !=1 && Lampara !=2 && Lampara !=3);
    switch(Lampara){
        case 1:
            return "Techo";
        case 2:
            return "Pared";
        case 3:
            return "Exterior";
       
    }
}

function saludo (){
    alert("Gracias por elegirnos, " + nombreUsuario);
    
}

solicitarNombre();

let lamparaNombre = elegirLampara();

saludo();