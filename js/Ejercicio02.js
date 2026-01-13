//Tipos de datos en Java Script

//Personalización de salidas de consola
//const bg= "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1)50%)";
//const style_console = `background: $(bg)`

console.log("%cEjercicio 02: Tipos de datos", style_console);

// 1. Undefinied -  valor por defecto asignado a variables declaradas pero no inicalizadas, no es igua a null
console.warm("1.- UNDEFINIED (NO DEFINIDO)");
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("Valores actuales de las variables");
console.log(`usuarioLogeado = ${usuarioLogeado}`);
console.log(`rolUsuario = ${rolUsuario}`);
console.log(`ultimoAcceso= ${ultimoAcceso}`);

/*
En java script existe el metodo typeof() que nos devuelve el tipo de dato de una variablepreficamente declarada.
*/
console.log("Tipos de datos de las variables declaradas:");
console.log(`usuarioLogeado = ${typeof(usuarioLogeado)}`);
console.log(`rolUsuario = ${typeof(rolUsuario)}`);
console.log(`ultimoAcceso= ${typeof(ultimoAcceso)}`);

//Supongamos que un usuario denominado Jeysi28 se ha logueado exitosamente, eñ valor de la variable debera actualizarce a su username

console.log(`El valor de la variable usuarioLogueado es: ${usuarioLogeado} y su nuevo tipo de dato es: ${typeof(usuarioLogeado)}`);

// 2.  boolean (TRUE/FALSE) - VERDADERO O FALSO
var hayUsuarioLogueado = false

/* 
Supongamos que nuestra app tendra un menu especifico para los usuarios registrados, en el podran visualizar sus mensajes o eatado de sus 
publicaciones renta o venta de propiedades a diferencia de un usuario que entra de mnera incognita a visualizar las propiedades.
*/
function validacionUsuarioLogueado(){
console.log(`El valor de la variable hayUsuarioLogueado es: ${hayUsuarioLogueado} , que es de tipo: ${typeof(hayUsuarioLogueado)}`);

if(hayUsuarioLogueado === true) //triple igual es cuando se evaluan valores y tipos de datos
    {
        console.log("Dado que se ha logueado un usuario la app mostrara el menu de usuario");
    }
    else if(!hayUsuarioLogueado)
    {
        console.log("Dado que no hay usuario logueado la app no mostrara el menu de usuario.");
    }
    else{
        console.log("No puedo procesar este tipo de dato, requiero de un booleano.");
    }
}

    //test1 : Usuario logueado = true
hayUsuarioLogueado= true;
console.log("Test 1")
    validacionUsuarioLogueado();

    //test3 :   Usuario logueado = false
hayUsuarioLogueado= false;
console.log("Test 3")
    validacionUsuarioLogueado();

    //test3 :   Usuario logueado = a cualquier otra cosa
console.log("Test 3")
hayUsuarioLogueado= 52.5;
    validacionUsuarioLogueado();

    // 3. NUMBER (Numericos)
    console.warn("3. NUMBER (NUMERICOS)")
/*
Es importate saber que en JAVAsCRIPT a diferencia de otros lenguajes no diferencia los datos
de tipo numerico, lo que para otros lenguajes de programacion de que un entero (INT), FLOTANTE (FLOAT), DECIMAL, DOBLE (DOUBLE), 
para el solo son numeros (NUMBER)
*/
    let userID_Owner = 225
    let priceProperty = 125000.50
    let latGPS = 20.240508
    let longGPS = -97.952881
    let altdGPS = 1180

    console.log(`Los valores de las variables declaradas para los datos de la propuedad son:
        ID del usuario propietario: ${userID_Owner} 
        Precio de la propiedad: ${priceProperty}
        Latitud GPS : ${latGPS}
        longitud GPS : ${longGPS}
        Altitu GPS : ${altdGPS}`);


        console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son:
        ID del usuario propietario: ${typeof(userID_Owner)} 
        Precio de la propiedad: ${typeof(priceProperty)}
        Latitud GPS : ${typeof(latGPS)}
        longitud GPS : ${typeof(longGPS)}
        Altitu GPS : ${typeof(altdGPS)}`);
