//Declaración de variables
var nombreUsuario = "Nicolas" 
var saldoCuenta = 10000
var limiteExtraccion = 3500
var codigoSecreto = "1234"

//Funcion sumar y restar dos valores

function sumar (a,b){
    return a+b;
}

//considerar que la funcion resta resta el segundo elemento al primero independientemente del signo
function restar (a,b){
    return a-b;
}


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt( prompt ("¿cuánto desea que sea su máximo monto de extracción?") );
    if (NoNaNNiNegativos(nuevoLimite) ) {
        limiteExtraccion = nuevoLimite; 
        actualizarLimiteEnPantalla();
        alert  ("El limite de extracción se ha modificado a: " + limiteExtraccion )
    } else {
        alert ("la operación no genero ningun cambio, en caso de querer modificar el limite de extración intente nuevamente.")
    }

}

//función para evitar NaN y valores Negativos

function NoNaNNiNegativos (valor){
    if (valor > 0 && valor !== "NaN" ){
        return true;
    } else { 
        return false;
    }
}
 //entrega True si es posible extraer ese monto segun saldo en cuenta.
function verificacionDeLimiteExtraccionCuenta(valorDeExtraccion) {
     if ( valorDeExtraccion <= saldoCuenta ){
         return true; 
     } else { 
         return false; }
}
 //entrega True si es posible extraer ese monto segun limite de Extracción.
 function verificacionDeLimiteExtraccionLimite(valorDeExtraccion) {
    if ( valorDeExtraccion <= limiteExtraccion ){
        return true; 
    } else { 
        return false; }
}

//funcion para extraer dinero

function extraerDinero() {
    var dineroAExtraer = parseInt( prompt ("¿cuánto desea extraer?") );
    if (verificacionDeLimiteExtraccionCuenta(dineroAExtraer)){
        if (verificacionDeLimiteExtraccionLimite(dineroAExtraer)){
            if (dineroAExtraer%100 === 0){
                var SaldoAnterior = saldoCuenta ;
                saldoCuenta = restar (SaldoAnterior, dineroAExtraer)
                actualizarSaldoEnPantalla()
                alert  ("El saldo anterior es de: " + SaldoAnterior + "\n" +
                " El valor extraído es de: " + dineroAExtraer + "\n" +
                " El saldo actual es de: " + saldoCuenta );
                actualizarSaldoEnPantalla();
                } else {
                   alert( "Solo aceptamos monton multiplos de 100")
                    } 
                } else {
                    alert ("No puede extraer ese monto dado que es superior a su limite de extracion")
                }
        }else {
        alert( "No dispone de ese monto para extraer" )
    }
}


function depositarDinero() {
    var dineroADepositar = parseInt( prompt ("¿cuánto desea depositar?") );
    if (NoNaNNiNegativos(dineroADepositar)) {
        var SaldoAnterior = saldoCuenta ;
        saldoCuenta = sumar (SaldoAnterior, dineroADepositar);
        actualizarSaldoEnPantalla();
        alert  ("El saldo anterior es de: " + SaldoAnterior + "\n" +
        " El valor depositado es de: " + dineroADepositar + "\n" +
        " El saldo actual es de: " + saldoCuenta );
    } else {
        alert ("No se realizo el deposito ya sea por cancelación de la operación o por se un numero negativo")
    }
}

//Esta seccion se encarga de toda la funcionalidad de pago de servicio

//Este array tiene los montos adeudados por servicio
//siendo el 0 "Agua", 1 "telefono", 2 "luz" y 3 "internet"

var servicios = [350,425, 210, 570];


//funcion que muestra los servicios y devuelve el valor deseado
function mostrarServicios(){
    return prompt ("Ingrese el número que corresponda con el servicio que queres pagar \n "
    + "1-Agua \n"
    + "2-Luz \n"
    + "3-Internet \n"
    + "4-Telefono \n")
}


function pagarServicio() {
    var servicioAPagar = mostrarServicios();
    console.log ( servicioAPagar);
    switch(servicioAPagar){
        case "1":
            if ( servicios[servicioAPagar-1] <= saldoCuenta ) {
                var montoADescontar = servicios[servicioAPagar-1]; 
                var saldoPrededito = saldoCuenta;
                saldoCuenta = restar(saldoPrededito, montoADescontar);
                servicios[servicioAPagar-1] = 0;
                alert("Has pagado el servicio de Agua. \n" +
                "Saldo anterior : $"+ saldoPrededito + "\n" +
                "Dinero Descontado : $" + montoADescontar + "\n"+
                "Saldo actual: $" + saldoCuenta  )
                actualizarSaldoEnPantalla();
            } else {
                alert ("No posee suficiente dinero para pagar")
            }
            break; 
        case "2":
            if ( servicios[servicioAPagar-1] <= saldoCuenta ) {
                var montoADescontar = servicios[servicioAPagar-1]; 
                var saldoPrededito = saldoCuenta;
                saldoCuenta = restar(saldoPrededito, montoADescontar);
                servicios[servicioAPagar-1] = 0;
                alert("Has pagado el servicio de telefono. \n" +
                "Saldo anterior : $"+ saldoPrededito + "\n" +
                "Dinero Descontado : $" + montoADescontar + "\n"+
                "Saldo actual: $" + saldoCuenta  )
                actualizarSaldoEnPantalla();
            } else {
                alert ("No posee suficiente dinero para pagar")
            }
            break; 
        case "3":
            if ( servicios[servicioAPagar-1] <= saldoCuenta ) {
                var montoADescontar = servicios[servicioAPagar-1]; 
                var saldoPrededito = saldoCuenta;
                saldoCuenta = restar(saldoPrededito, montoADescontar);
                servicios[servicioAPagar-1] = 0;
                alert("Has pagado el servicio de Luz. \n" +
                "Saldo anterior : $"+ saldoPrededito + "\n" +
                "Dinero Descontado : $" + montoADescontar + "\n"+
                "Saldo actual: $" + saldoCuenta  )
                actualizarSaldoEnPantalla();
            } else {
                alert ("No posee suficiente dinero para pagar")
            }
            break; 
        case "4":
            if ( servicios[servicioAPagar-1] <= saldoCuenta ) {
                var montoADescontar = servicios[servicioAPagar-1]; 
                var saldoPrededito = saldoCuenta;
                saldoCuenta = restar(saldoPrededito, montoADescontar);
                servicios[servicioAPagar-1] = 0;
                alert("Has pagado el servicio de Internet. \n" +
                "Saldo anterior : $"+ saldoPrededito + "\n" +
                "Dinero Descontado : $" + montoADescontar + "\n"+
                "Saldo actual: $" + saldoCuenta  )
                actualizarSaldoEnPantalla();
            } else {
                alert ("No posee suficiente dinero para pagar")
            }  
            break; 
        default:
            alert ("Elija una opcion valida")
            break;    
        }
}

//aca estan todas las funciones, variables y objetos que utilizamos para transferir dinero

var cuentasAmigasPorNombre = ["amiga1", "amiga2"];
var cuentasAmigasPorNumero = ["1234567", "7654321"];

function transferirDinero() {
    var montoATransferir = parseInt (prompt ("Cuanto dinero desea transferir?"))
    if (montoATransferir <= saldoCuenta){
        var cuentaATransferir = prompt ("Ingrese el numero de cuenta a la que desea transferir: ")
        if (corroborarCuenta(cuentaATransferir)===true){
            var montoADescontar = montoATransferir; 
            var saldoPrededito = saldoCuenta;
            saldoCuenta = restar(saldoPrededito, montoADescontar);
            alert("Has realizado la transferencia a "+ cuentaATransferir + "\n" +
            "Saldo anterior : $"+ saldoPrededito + "\n" +
            "Dinero Descontado : $" + montoADescontar + "\n"+
            "Saldo actual: $" + saldoCuenta )
            actualizarSaldoEnPantalla();
        } else {
            alert ("El usuario no existe")
        }

    }else {
        alert ("El monto a transferir es superior a su saldo")
    }
}

//chequeo de existencia de cuenta

function corroborarCuenta(numeroDeCuenta){
    for (let i = 0; i < cuentasAmigasPorNumero.length; i++) {
        var cuenta = cuentasAmigasPorNumero[i];
            if(cuenta === numeroDeCuenta ) {
                return  true;
            }
        }
        return false;
    }


//Aca van todas las funciones, variables y objetos que utilizamos para iniciar sesion

function iniciarSesion() {
    var codigoIngresado = prompt ("ingrese su codigo de verificacion: ")
    if (codigoIngresado === codigoSecreto){
        alert("Bienvenido/a "+ nombreUsuario + "ya puedes realizar operaciones")
    } else {
        alert("Por medidas de seguridad hemos retenido todo tu dinero, acercate a tu sucursal mas cercana para reestablecer contraseña y dinero")
        saldoCuenta = 0;
        actualizarSaldoEnPantalla()
    }
}



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}