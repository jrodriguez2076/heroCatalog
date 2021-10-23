'use strict'

const heroes = require('./heroesDB.json');

function encontrarHeroe(id) {
    let resultado = null;
    for (let heroe of heroes) {
        if (heroe.id === id) {
            resultado = heroe;
            break;
        }
    }
    return resultado
}

module.exports = encontrarHeroe;