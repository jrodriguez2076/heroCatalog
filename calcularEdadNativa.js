'use strict'

const encontrarHeroe = require('./encontrarHeroe.js');

function calcularEdadNativa(id) {
    let heroe = encontrarHeroe(id);
    if (heroe === null) {
        return `Error. Heroe ${id} no encontrado.`;
    } else {
        let edadNativa = 0;

        switch (heroe.race.toLowerCase()) {
            case "humano":
                {
                    edadNativa = Math.floor(heroe.age);

                    break;
                }
            case "plutoniano":
                {
                    edadNativa = Math.floor(heroe.age / 248);

                    break;
                }
            case "kryptoniano":
                {
                    edadNativa = Math.floor(heroe.age / 1000);

                    break;
                }
            case "amazona":
                {
                    if (heroe.age <= 500) {
                        edadNativa = Math.floor(heroe.age / 25);

                        break;
                    }
                    if (heroe.age > 500) {
                        edadNativa = Math.floor((20 + (heroe.age - 500) / 50));

                        break;
                    }
                }
            case "marciano":
                {
                    edadNativa = Math.floor((heroe.age / 1.8));

                    break;
                }
            default:
                return `Se desconoce la edad Nativa`
        }
        return `${heroe.name} es un ${heroe.race} y tiene ${edadNativa} años en su raza.`
    }

}


module.exports = calcularEdadNativa;