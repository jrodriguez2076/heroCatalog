'use strict'

const encontrarHeroe = require('./encontrarHeroe.js');

function compararEditoral(id1, id2) {
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
    if (!!heroe1.publisher || !!heroe2.publisher) {
        if (heroe1['publisher'].toLowerCase() === heroe2['publisher'].toLowerCase()) {
            return `${heroe1.name} y ${heroe2.name} estan en la misma casa Editorial.`;
        } else {
            return `${heroe1.name} y ${heroe2.name} estan en diferentes casas Editoriales.`;
        }
    } else {
        return 'Error. Editoral de uno de los Heroes no encontrada.';
    }
}
module.exports = compararEditoral;