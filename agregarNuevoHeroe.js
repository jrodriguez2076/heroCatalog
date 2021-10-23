'use strict'

const heroes = require('./heroesDB.json');
const guardarLista = require('./guardarLista.js');

function agregarNuevoHeroe(heroeNuevo) {
    if (typeof heroeNuevo === 'object') {
        heroes.push(heroeNuevo);
        guardarLista(heroes);
        return 'Exito. Heroe agregado.';
    } else {
        return 'Error. El heroe a agregar debe ser de tipo objeto';
    }
}

module.exports = agregarNuevoHeroe;