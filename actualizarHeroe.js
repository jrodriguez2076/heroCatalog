'use strict'

const heroes = require('./heroesDB.json');
const encontrarHeroe = require('./encontrarHeroe.js');
const guardarLista = require('./guardarLista.js');

function actualizarHeroe(id, datos) {
    let heroeActual = encontrarHeroe(id);
    if (heroeActual === null) {
        return 'Error. Heroe no encontrado'
    } else {
        for (let propiedad in datos) {
            heroeActual[propiedad] = datos[propiedad];
        }
        guardarLista(heroes);
        return 'Exito. Heroe Actualizado';
    }
};

module.exports = actualizarHeroe;