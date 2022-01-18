//01-javascript/
// 01-variables.js

//Mutables
var numeroUno =1;
let numeroDos =2;
numeroUno= 5;
numeroDos= 8;
numeroUno= false;
numeroDos= false;

//Inmutables
const configuracionArchivos = "PDF";
//configuracionArchivos = "XML";
//vamos a preferir CONST > LET > NUNCA VAR!

//Tipos de variables
const numero =1; //number
const sueldo =1.2; //number
const texto ="Carolina"; //string
const apellido ='Mendoza'; //string
const booleano = false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);
console.log(typeof Number("asd")); //number
console.log(Number("asd")); //NaN

//Truty Fulsy
if(""){
    console.log("String vacio es verdadero");
}else{
    console.log("String vacio es Falsy");
}


if("Carolina"){
    console.log("String con datos es Truty");
}else{
    console.log("String con datos Falso");
}

//con numeros negativos (resultado: es Truty)
if(-1){
    console.log("Negativos es Truty");
}else{
    console.log("Negativos es Falso");
}
//con cero (resultado: es Falso)
if(0){
    console.log("Cero es Truty");
}else{
    console.log("Cero es falso");
}
//con numeros positivos (resultado: es Truty)
if(1){
    console.log("Positivo es Truty");
}else{
    console.log("Positivo es Falso");
}


//con null
if(null){
    console.log("Null es Truty");
}else{
    console.log("Null es falso"); //Falsy
}
//con undefined
if(undefined){
    console.log("Undefined es Truty");
}else{
    console.log("Undefined es Falso"); //Falsy
}

//Objetos JS (JSON) -Arreglos
const adrian={
    nombre:"Adrian", //llave: valor,
    apellido:'Eguez',
    edad:32,
    hijos:null,
    zapatos: undefined,
    casado: false,
    ropa:{
        color:'plomo',
        talla:'40',
    },
    mascotas:['Cachetes', 'Pequitas', 'Panda'],
};

//Acceder a las propiedades del objeto
adrian.nombre; //Adrian
adrian.apellido;//Eguez
adrian["nombre"];
console.log(adrian);
adrian.nombre= "Vicente";
console.log(adrian);
adrian["nombre"]= "Adrian";
adrian.sueldo; //undefined
console.log(adrian.sueldo);


adrian.sueldo; //undefined
console.log(adrian.sueldo);
adrian.sueldo=1.2;
console.log(adrian.sueldo); //1.2
adrian["gastos"]=0.8;
console.log(adrian.gastos); //0.8
adrian.nombre=undefined;
console.log(adrian);
console.log(Object.keys(adrian));
console.log(Object.values(adrian));


delete adrian.nombre;
console.log(adrian);

//variables por valor o referencia
//variables por valor en JS son la primitivas: number, string, boolean
let edadAdrian =32;
let edadVicente = edadAdrian; //guardamos una primitiva en otra variable
                             // variables por valor
console.log(edadAdrian); //32
console.log(edadVicente); //32
edadAdrian = edadAdrian +1;
console.log(edadAdrian); //33
console.log(edadVicente); //32

//variables por referencia: Object ({} {})
// let rafael ={
//     nombre: "Rafael"
// };
// let lenin = rafael;
// console.log(rafael);
// console.log(lenin);
// lenin.nombre = "Lenin";
// console.log(rafael);
// console.log(lenin);
//
// delete rafael.nombre;
// console.log(rafael);
// console.log(lenin);

let rafael ={
    nombre: "Rafael"
};
let lenin = Object.assign({}, rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);

let arregloNumeros = [1,2,3,4,5];
let arregloClonado = Object.assign([], arregloNumeros);
console.log(arregloNumeros);
console.log(arregloClonado);
arregloNumeros[0] =200;
arregloClonado[0] =100;
console.log(arregloNumeros);
console.log(arregloClonado);
