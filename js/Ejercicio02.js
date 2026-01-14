//Tipos de datos en JavaScript

//Personalizacion de salidas a Consola
//const bg="linear-gradient(45deg, rgba(52, 152, 219, 1)0%, rgba (26, 188, 156, 1) 50%)";
//const style_console = `background: ${bg}; color: white; border-radius:6px; padding:4px; font-size:1.0rem;font-weight:bold`;

console.log("%c2.-Ejercicio 02: Tipos de Datos", style_console);

//1. Undifined - valor por defecto asignado a variables declaradas pero no inicializadas, no es igual a NULL.
console.log("1.- Undifined (No Definido)");
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined;

/* En Java Script existe un metodo typeof() que nos devuelve el tipo de una varible
preficamente declarada o su valor*/

console.log("Valores actuales de las variables:");
console.log(`usuarioLogeado = ${typeof(usuarioLogeado)}`);
console.log(`rolUsuario = ${typeof(rolUsuario)}`);   
console.log(`ultimoAcceso = ${typeof(ultimoAcceso)}`);

//supongamos que un usuario denominado Jeysise ha logeado exitosamente , el valor de la variable debera
//actualizarse a su username
usuarioLogeado = "Jeysi D.";

//PERO NO SOLO CAMBIARA SU VALOR SINO TAMBIEN SU TIPO DE DATO

console.log(`El valor de la varible usuarioLogeado ahora es: ${usuarioLogeado}y su tipo de dato es: ${typeof(usuarioLogeado)}`);

//2. BOOLEAN (TRUE/FALSE) - Verdadero o falso

var hayUsuarioLogeado;

/* Supongamos que nuestra app tendra un menu especifico para los usuarios
registrados, en el podran visualizar sus mensajes o estados de sus publicaciones
de renta o venta de propiedades, a diferencia de un usuario que entra de manera igcognita a visualizar
las propiedades*/
function validacionUsuarioLogeado(){

console.log(`'El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado}, que es de tipo: ${typeof(hayusuarioLogeado)}'`);

if(hayUsuarioLogeado===true){
   console.log("Dado que se ha logueado un usuario la app mostrara el menu de usuario");
}
else if(!hayUsuarioLogeado){
console.log("Dado que no hay usuario logueado la app no mostrara el menu de usuario");
}

else{
    console.log("No puedo procesar este tipo de dato, requerido de un boolean.")
}
}
//test1 : usuario logeado = true
hayUsuarioLogeado=true;
console.log("Test_1")
validacionUsuarioLogeado();
//test2 : usuario logeado = false
hayUsuarioLogeado=false;
console.log("Test_2")
validacionUsuarioLogeado();
//test1 : usuario logeado = cualquier otra cosa
hayUsuarioLogeado=52.5;
console.log("Test_3")
validacionUsuarioLogeado();

//3. NUMBER - Tipo de dato numerico, ya sea entero o decimal
/* Es importante saber que JavaScript s diferencia de otros lenguajes no difiere entre enteros y decimales
lo que para otros lenguajes de programaion lo que un ENTERO (INT), FLOTANTE(FLOAT), DECIMAL, DOUBLE(DOUBLE) para
el solo son numeros*/
let userID_Owner = 225
let priceProperty = 1250000.50
let latGPS = 20.240508
let altGPS =  -97.952881
let longGPS = 1180


    console.log(`Los valores de las variables declaradas para los datos de la propuedad son:
        ID del usuario propietario: ${userID_Owner} 
        Precio de la propiedad: ${priceProperty}
        Latitud GPS : ${latGPS}
        longitud GPS : ${longGPS}
        Altitu GPS : ${altGPS}`);


        console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son:
        ID del usuario propietario: ${typeof(userID_Owner)} 
        Precio de la propiedad: ${typeof(priceProperty)}
        Latitud GPS : ${typeof(latGPS)}
        longitud GPS : ${typeof(longGPS)}
        Altitu GPS : ${typeof(altGPS)}`);

        //4.- STRING (Cadena de caracteres)
        var fullnameOwner = "Jeysi D. Lara";
        let nameProperty = "    Hermosa Casa en la Playa de Puerto Vallarta   ";
        let descriptionProperty = "casa de 2 pisos, 4 habitaciones 2 baños completos y estacionamiento para 2 automoviles a la orilla del mar.";
        var statusProperty = "Disponible";
        const typeProperty = "C";
        var addressProperty;

        /* Los tipos de datos STRING son palabras , valores cualitativos de las entidades de nuestra aplicacion, queh no tiene un tamaño maximo y que estan conformes
        por caracteres alfabeticos, caracteresespeciales como ascentos o simbolos de algun idioma*/

        console.warn("4. STRING (CADENA DE CARACTERES, PALABRAS");
        console.log(`El usuario: ${fullnameOwner},
            esta vendiendo o rentando: ${nameProperty}
            que consiste en: ${descriptionProperty}
            actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`);

        console.log(`Las variables declaradas son del tipo: 
            fullnameOwner : ${typeof(fullnameOwner)}
            nameProperty : ${typeof(nameProperty)}
            descriptionProperty : ${typeof(descriptionProperty)}
            statusProperty : ${typeof(statusProperty)}
            typeProperty : ${typeof(typeProperty)}
            `);

    // Transformar a MAYUSCULAS
        console.log(`Nombre del Propietario ${fullnameOwner.toUpperCase()}`);
        //Transformar a minusculas
        console.log(`Descripcion de la propiedad: ${descriptionProperty.toLocaleLowerCase()}`);
        // Numero de caracteres
        console.log(`Numero de letras en el tipo de propiedad ${typeProperty.length()}`); 
        //Subcadena
        console.log(`Apellido del propietario: ${fullnameOwner.slice(8, fullnameOwner.length())}`);
        //Eliminar espacios
        console.log(`Nombre de la propiedad: ${nameProperty.trim()}`);
        //Remplazar caracteres
        console.log(`Descripcion modificada: ${descriptionProperty.replace("MAR","RIO")}`);
        //Remplazar todos
        console.log(`Descripcion modificada: ${descriptionProperty.replace("A","4")}`);


// 5. BIGINT (Entero de grandes dimensiones)
/*Este tipo de dato permite almacenar numeros exajeradamente amplios que usualmente aplicaciones
cientificas avanzadas requieren, esto para no perder presición en los valores almacenados*/

const numeroGrande = 1234567890;
let numeroGrande2 = 12345678901234567890;
let numeroGrande3 = 123456789012345678901234567890;
let numeroGrande4 = 1234567890123456789012345678901234567890;

console.warn("5. BIGINT (enteros de grandes dimensiones)");

console.log(`El valor del numeroGrande es: ${numeroGrande} y es soportado por : ${typeof(numeroGrande)}`);

console.log(`El valor del numeroGrande2 es: ${numeroGrande2} a psear de ser soportado 
por : ${typeof(numeroGrande2)} comienza a tener problemas de presicion`);


//BigInt no pierde presición
console.log(`El valor del numeroGrande3 es: ${numeroGrande3} ya no es soportado por 
NUMBER y adquiere un nuev tipo siendo: ${typeof(numeroGrande3)}`);

console.log(`El valor del numeroGrande4 es: ${numeroGrande4} y es soportado por : ${typeof(numeroGrande4)}`);

numeroGrande2 = BigInt("12345678901234567890");
console.log(`Si declaramos la variable con el valor de numeroGrande2 es: ${numeroGrande2} un tipo de dato: ${typeof(numeroGrande2)}`);

numeroGrande3 = BigInt("123456789012345678901234567890");
console.log(`Si declaramos la variable con el valor de numeroGrande3 es: ${numeroGrande3} un tipo de dato: ${typeof(numeroGrande3)}`);

numeroGrande4 = BigInt("1234567890123456789012345678901234567890");
console.log(`Si declaramos la variable con el valor de numeroGrande4 es: ${numeroGrande4} un tipo de dato: ${typeof(numeroGrande4)}`);

//6. Symbol (simbolo)

/*Es un tipo de dato que ademas de tener un tipo, un valor, asocia la ubicación en el espacio en memoria,
por lo que todos los valores asignados asignados a este tipo siempre seran unicos.
*/

console.warn("6. SYMBOL (simbolo)");

const numero1 = 4;
const numero2= 4.0;
const numero3 = "4";
const numero4 = "4.0";
const numero5 = Symbol(4);
const numero6 = Symbol(4.0);
const numero7 = Symbol("4");
const numero8 = Symbol("4.0");

//valores y tipo de datos
console.log(`Valores y tipos:
    numero1 - valor: ${numero1}, tipo: ${typeof(numero1)}
    numero2 - valor: ${numero2}, tipo: ${typeof(numero2)}
    numero3 - valor: ${numero3}, tipo: ${typeof(numero3)}
    numero4 - valor: ${numero4}, tipo: ${typeof(numero4)}
    numero5 - valor: ${numero5.description}, tipo: ${typeof(numero5)}
    numero6 - valor: ${numero6.description}, tipo: ${typeof(numero6)}
    numero7 - valor: ${numero7.description}, tipo: ${typeof(numero7)}
    numero8 - valor: ${numero8.description}, tipo: ${typeof(numero8)}
    `);

if(numero1 ==numero2)
    console.log("Las variables numero1 y numero2 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero2 no son iguales en valor.")
if(numero1 == numero3)
    console.log("Las variables numero1 y numero3 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero3 no son iguales en valor.")
if(numero1 == numero4)
    console.log("Las variables numero1 y numero4 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero4 no son iguales en valor.")
if(numero1 == numero5)
    console.log("Las variables numero1 y numero5 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero5 no son iguales en valor.")
if(numero5 == numero6)
    console.log("Las variables numero5 y numero6 son igulaes en valor.")
else
    console.log("Las variables numero5 y numero6 no son iguales en valor.")
if(numero1 ==numero2)
    console.log("Las variables numero1 y numero2 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero2 no son iguales en valor.")
if(numero1 == numero3)
    console.log("Las variables numero1 y numero3 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero3 no son iguales en valor.")
if(numero1 == numero4)
    console.log("Las variables numero1 y numero4 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero4 no son iguales en valor.")
if(numero1 == numero5)
    console.log("Las variables numero1 y numero5 son igulaes en valor.")
else
    console.log("Las variables numero1 y numero5 no son iguales en valor.")
if(numero5 == numero6)
    console.log("Las variables numero5 y numero6 son igulaes en valor.")
else
    console.log("Las variables numero5 y numero6 no son iguales en valor.")

//7. NULL (Nulo)

/*El tipo de datonulo es similar a UNDEFINED, con la variacion de que hay un concentimiento del usuario
o del sistema a que esta variable intencionalmente fue iniciada con este valor */

var isPremiumUser;
var isNewUser;
var lastLogin = new Date();
let todayDate = new Date();

console.warn("7. NULL (Nulo)");
console.log(`El usuario: ${usuarioLogeado}, tipo de dato: ${typeof(usuarioLogeado)}
    Fecha ultimo login: ${todayDate}, tipo de dato: ${typeof(todayDate)}
    Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof(isNewUser)}
    Es usuario premium: ${isPremiumUser}, tipo de dato: ${typeof(isPremiumUser)}`);

    //Validacion del usuario

    if(todayDate == lastLogin)
        isNewUser = true;
    else
        isNewUser = false;

    //Como es un usuario nuevo aun no ve, ni publica ninguna propiedad por defecto no interesa por el momento 
    // que sea premium hasta que interactue con la plataforma

    isPremiumUser = null;

    console.log(`El usuario: ${usuarioLogeado}, tipo de dato: ${typeof(usuarioLogeado)}
    Fecha ultimo login: ${todayDate}, tipo de dato: ${typeof(todayDate)}
    Es nuevo usuario: ${isNewUser}, tipo de dato: ${typeof(isNewUser)}
    Es usuario premium: ${isPremiumUser}, tipo de dato: ${typeof(isPremiumUser)}`);






