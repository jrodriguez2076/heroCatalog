'use strict'

const heroes = require('./heroesDB.json');
const actualizarHeroe = require('./actualizarHeroe.js');
const agregarNuevoHeroe = require('./agregarNuevoHeroe.js');
const calcularTiempoDeDescanso = require('./calcularTiempoDeDescanso.js');
const compararEdad = require('./compararEdad.js');
const compararEditorial = require('./compararEditorial');
const compararRaza = require('./compararRaza.js');
const eliminarHeroe = require('./eliminarHeroe.js');
const encontrarHeroe = require('./encontrarHeroe.js');
const guardarLista = require('./guardarLista');
const presentarHeroe = require('./presentarHeroe');
const calcularEdadNativa = require('./calcularEdadNativa');


// PROCESS.ARGV DIVIDIR EL COMANDO CONVERTIDO EN ARREGLO PARA PODER ACCEDER A lAS FUNCIONES DESDE LA CONSOLA 
const procesoHeroe = process.argv.slice(2);

switch (procesoHeroe[0]) {
    case "calcularTiempoDeDescanso":
        console.log(calcularTiempoDeDescanso(parseInt(procesoHeroe[1])));
        break;

    case "compararEdad":
        console.log(compararEdad(parseInt(procesoHeroe[1]), parseInt(procesoHeroe[2])));
        break;

    case "compararEditoral":
        console.log(compararEditorial(parseInt(procesoHeroe[1]), parseInt(procesoHeroe[2])));
        break;

    case "compararRaza":
        console.log(compararRaza(parseInt(procesoHeroe[1]), parseInt(procesoHeroe[2])));
        break;

    case "eliminarHeroe":
        console.log(eliminarHeroe(parseInt(procesoHeroe[1])));
        break;

    case "encontrarHeroe":
        console.log(encontrarHeroe(parseInt(procesoHeroe[1])));
        break;

    case "presentarHeroe":
        console.log(presentarHeroe(parseInt(procesoHeroe[1])));
        break;

    case "calcularEdadNativa":
        console.log(calcularEdadNativa(parseInt(procesoHeroe[1])));
        break;

    default:
        console.log("Funcion no encontrada");
        break;

}