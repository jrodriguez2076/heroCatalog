'use strict'

const heroes = require('./heroesDB.json');
const encontrarHeroe = require('./encontrarHeroe.js');
const guardarLista = require('./guardarLista.js');

function eliminarHeroe(id) {
    let heroeEliminar = encontrarHeroe(id);
    if (heroeEliminar === null) {
        return 'Error. Heroe no encontrado';
    } else {
        let pos = heroes.indexOf(heroeEliminar);
        heroes.splice(pos, 1);
        guardarLista(heroes);
        return (`Tienes ${heroes.length} heroes en la lista global`);
    }
}

module.exports = eliminarHeroe;