'use strict'

const encontrarHeroe = require('./encontrarHeroe.js');

function presentarHeroe(id) {
    let heroe = encontrarHeroe(id);
    if (heroe === null) {
        return `Error. Heroe ${id} no encontrado.`;
    } else {
        return `${heroe.name} pertenece a la raza ${heroe.race}, tiene una edad de ${heroe.age} años, nació en ${heroe.placeOfBirth}, actualmente vive en ${heroe.base}, bajo el nombre de ${heroe.alterEgo}.`
    }
}

module.exports = presentarHeroe;