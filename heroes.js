'use strict'

const heroes = require('./heroesDB.json');
const fs = require('fs');

function agregarNuevoHeroe(heroeNuevo) {
    if (typeof heroeNuevo === 'object') {
        heroes.push(heroeNuevo);
        guardarLista(heroes);
        return 'Exito. Heroe agregado.';
    } else {
        return 'Error. El heroe a agregar debe ser de tipo objeto';
    }
}

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

function actualizarHeroe(id, datos) {
    let heroeActual = encontrarHeroe(id);
    if (heroeActual === null) {
        return 'Error. Heroe no encontrado'
    } else {
        for (propiedad in datos) {
            heroeActual[propiedad] = datos[propiedad];
            if (heroeActual[propiedad] === datos[propiedad]) {
                console.log(`${propiedad} cambiada con exito.`);
            } else {
                return ('error al actualizar');
            }
        }
        guardarLista(heroes);
        return 'Exito. Heroe Actualizado';
    }
};

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

function calcularTiempoDeDescanso(id) {
    heroe = encontrarHeroe(id);
    if (heroe === null) {
        return `Error. Heroe ${id} no encontrado.`;
    } else {
        let tiempoDeDescanso = 0;
        let mensaje;
        switch (heroe.race.toLowerCase()) {
            case "humano":
                {
                    tiempoDeDescanso = 60 * ((heroe.age) / 10);
                    console.log(tiempoDeDescanso);
                    break;
                }
            case "plutoniano":
                {
                    tiempoDeDescanso = 4 * ((heroe.age) / 12);
                    console.log(tiempoDeDescanso);
                    break;
                }
            case "kryptoniano":
                {
                    tiempoDeDescanso = 10 * ((heroe.age) / 30);
                    console.log(tiempoDeDescanso);
                    break;
                }
            case "amazona":
                {
                    if (age <= 400) {
                        tiempoDeDescanso = 1 * ((age) / 10);
                        console.log(tiempoDeDescanso);
                        break;
                    }
                    if (age > 400) {
                        tiempoDeDescanso = 40 + (2 * ((age - 400) / 10));
                        console.log(tiempoDeDescanso);
                        break;
                    }
                }
            case "marciano":
                {
                    tiempoDeDescanso = 15 * ((heroe.age) / 10);
                    console.log(tiempoDeDescanso);
                    break;
                }
            default:
                return `Se desconoce el tiempo de descanso.`
        }
        return `${heroe.name} es un ${heroe.race} y tiene ${tiempoDeDescanso.toFixed(2)} min de descanso.`
    }

}

function guardarLista(nuevaLista) {
    fs.writeFileSync('./heroesDB.json', JSON.stringify(nuevaLista), { encoding: 'utf8' });
}