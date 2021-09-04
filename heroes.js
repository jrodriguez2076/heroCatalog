heroes = [{
        id: 01,
        name: 'SuperMan',
        alterEgo: 'Clark Kent',
        biography: 'Escondido bajo una vida comun de periodista en Metropi=olis, se encarga de mantener a salvo la ciudad de todo lo que ocurre ',
        age: 80,
        placeOfBirth: 'Krypton',
        race: 'Kryptoniano',
        base: 'Metropolis',
        image: 'https://sm.ign.com/t/ign_es/screenshot/default/publicity-photo-superman-the-movie-20409106-1054-1_8zn8.1280.jpg',
        publisher: 'DC Comics',
    },
    {
        id: 02,
        name: 'Supertipo',
        alterEgo: 'Sr tipo',
        biography: 'Era una tipo normal que fue golpeado por muchas veces por una pandilla de tipos, absorbiendo todas sus habilidades conviertiendola en poderes',
        age: 682,
        placeOfBirth: 'pluton',
        race: 'plutoniano',
        base: 'Personalandia',
        image: 'https://as01.epimg.net/tikitakas/imagenes/2016/11/04/portada/1478253197_049732_1478256603_noticia_normal_recorte1.jpg',
        publisher: 'SangelComic',
    },
    {
        id: 03,
        name: 'Spiderman',
        alterEgo: 'Peter Benjamin Parker',
        biography: 'Estudiante comun de la universidad que emplea sus habilidades sobrehumanas, reminiscentes de una araña, para combatir a otros supervillanos que persiguen fines siniestros.',
        age: 17,
        placeOfBirth: 'EEUU',
        race: 'Humano',
        base: 'New York',
        image: 'https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg',
        publisher: 'Marvel',
    },
    {
        id: 04,
        name: 'Wonder Woman',
        alterEgo: 'Diana Prince',
        biography: 'Es una princesa guerrera de las Amazonas. Está dotada de una amplia gama de poderes superhumanos y habilidades de combate de batalla superiores, gracias a sus dones obtenidos de los dioses y su amplio entrenamiento.',
        age: 800,
        placeOfBirth: 'Temiscira',
        race: 'Amazona',
        base: 'EEUU',
        image: 'https://www.agenciapacourondo.com.ar/sites/www.agenciapacourondo.com.ar/files/mujer_maravilla_2017.jpg',
        publisher: 'DC Comics',
    },
    {
        id: 05,
        name: 'Ironman',
        alterEgo: 'Anthony Edward Stark ',
        biography: 'Multimillonario magnate empresarial e ingenioso científico, quien sufrió una grave lesión en el pecho durante un secuestro y crea una armadura para salvar su vida y escapar del cautiverio. Más tarde, Stark desarrolla su traje a traves de su compañía, Industrias Stark, para proteger al mundo',
        age: 53,
        placeOfBirth: 'EEUU',
        race: 'Humano',
        base: 'EEUU',
        image: '',
        publisher: 'Marvel ',
    },
]

function agregarNuevoHeroe(heroeNuevo) {
    if (typeof heroeNuevo === 'object') {
        heroes.push(heroeNuevo);
        return 'Exito. Heroe agregado.';
    } else {
        return 'Error. El heroe a agregar debe ser de tipo objeto';
    }
}

function encontrarHeroe(id) {
    let resultado = null;
    for (heroe of heroes) {
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
        return (`Tienes ${heroes.length} heroes en la lista global`);
    }
}

function compararEdad(id1, id2) {
    if (id1 === id2) {
        return 'No se puede comparar el mismo heroe.'
    }
    let heroe1 = encontrarHeroe(id1);
    let heroe2 = encontrarHeroe(id2);
    if (heroe1 === null) {
        return `Error. Heroe ${id1} no encontrado.`
    }
    if (heroe2 === null) {
        return `Error. Heroe ${id2} no encontrado.`
    }
    if (!!heroe1.age || !!heroe2.age) {
        return 'Error. Edad de uno de los Heroes no encontrada.'
    } else {
        if (heroe1['age'] > heroe2['age']) {
            return `${heroe1.name} es mas viejo que ${heroe2.name}`
        } else if ((heroe1['age'] < heroe2['age'])) {
            return `${heroe1.name} es mas joven que ${heroe2.name}`;
        } else {
            return `${heroe1.name} y ${heroe2.name} son de la misma edad`;
        }
    }
}