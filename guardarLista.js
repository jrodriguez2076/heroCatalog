'use strict'

const fs = require('fs');

function guardarLista(nuevaLista) {
    fs.writeFileSync('./heroesDB.json', JSON.stringify(nuevaLista), { encoding: 'utf8' });
}
module.exports = guardarLista;