'use strict'

const encontrarHeroe = require('./encontrarHeroe.js');

function compararRaza(id1, id2) {
    if (id1 === id2) {
        return 'No se puede comparar el mismo heroe.';
    }
    let heroe1 = encontrarHeroe(id1);
    let heroe2 = encontrarHeroe(id2);
    if (heroe1 === null) {
        return `Error. Heroe ${id1} no encontrado.`;
    }
    if (heroe2 === null) {
        return `Error. Heroe ${id2} no encontrado.`;
    }
    if (!!heroe1.race || !!heroe2.race) {
        if (heroe1['race'].toLowerCase() === heroe2['race'].toLowerCase()) {
            return `${heroe1.name} y ${heroe2.name} son de la misma raza.`;
        } else {
            return `${heroe1.name} y ${heroe2.name} son de diferentes razas.`;
        }
    } else {
        return 'Error. Raza de uno de los Heroes no encontrada.';
    }
}

module.exports = compararRaza;