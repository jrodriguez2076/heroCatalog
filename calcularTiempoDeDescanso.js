'use strict'

const encontrarHeroe = require('./encontrarHeroe.js');

function calcularTiempoDeDescanso(id) {
    let heroe = encontrarHeroe(id);
    if (heroe === null) {
        return `Error. Heroe ${id} no encontrado.`;
    } else {
        let tiempoDeDescanso = 0;

        switch (heroe.race.toLowerCase()) {
            case "humano":
                {
                    tiempoDeDescanso = 60 * ((heroe.age) / 10);
                    console.log(tiempoDeDescanso);
                    break;
                }
            case "plutoniano":
                {
                    tiempoDeDescanso = 4 * ((heroe.age) / 12);
                    console.log(tiempoDeDescanso);
                    break;
                }
            case "kryptoniano":
                {
                    tiempoDeDescanso = 10 * ((heroe.age) / 30);
                    console.log(tiempoDeDescanso);
                    break;
                }
            case "amazona":
                {
                    if (heroe.age <= 400) {
                        tiempoDeDescanso = 1 * ((heroe.age) / 10);
                        console.log(tiempoDeDescanso);
                        break;
                    }
                    if (heroe.age > 400) {
                        tiempoDeDescanso = 40 + (2 * ((heroe.age - 400) / 10));
                        console.log(tiempoDeDescanso);
                        break;
                    }
                }
            case "marciano":
                {
                    tiempoDeDescanso = 15 * ((heroe.age) / 10);
                    console.log(tiempoDeDescanso);
                    break;
                }
            default:
                return `Se desconoce el tiempo de descanso.`
        }
        return `${heroe.name} es un ${heroe.race} y tiene ${tiempoDeDescanso.toFixed(2)} min de descanso.`
    }

}

module.exports = calcularTiempoDeDescanso;