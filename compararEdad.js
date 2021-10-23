'use strict'

const encontrarHeroe = require('./encontrarHeroe.js');

function compararEdad(id1, id2) {
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
    if (!!heroe1.age || !!heroe2.age) {
        if (heroe1['age'] > heroe2['age']) {
            return `${heroe1.name} es mas viejo que ${heroe2.name}`;
        } else if ((heroe1['age'] < heroe2['age'])) {
            return `${heroe1.name} es mas joven que ${heroe2.name}`;
        } else {
            return `${heroe1.name} y ${heroe2.name} son de la misma edad`;
        }

    } else {
        return 'Error. Edad de uno de los Heroes no encontrada.';
    }
}

module.exports = compararEdad;