
const opciones = {
    id_asignatura: {
        alias: 'asig',
        demand: true
    },
    nombre_estudiante: {
        alias: 'nom',
        demand: true
    },
    documento_estudiante: {
        alias: 'doc',
        demand: true
    }
}

const cursos = require('./data.js');
const fs = require('fs');
const argv = require('yargs')
 .command('inscribir', 'Inscribase a un curso', opciones)
 .argv;

const printCourses = (obj, time, callback) => {
    setTimeout(function () {
        callback(`El curso se llama: ${obj.nombre}, tiene asignado el id: ${obj.id}, su duración es de: ${obj.duracion} y tiene un costo de: ${obj.valor}.`)
    }, time);
}

let generateFile = (curso, argv) => {

   let body = `El estudiante ${argv.nombre_estudiante} con identificacion ${argv.documento_estudiante}, 
   se prematriculo para el siguiente curso ${asignatura.nombre} con el identificador ${asignatura.id},
    la duración de dicho curso sera de ${asignatura.duracion} y el valor es de ${asignatura.precio} pesos.`;

    fs.writeFile('inscripcion.txt', body, (err) => {
        if (err) throw (err);
        console.log('Se creo con exito el archivo');
    });
}

//Si no se ingreso un argumento se listan todos lo cursos
if (argv.id_asignatura === undefined) {
    for (let i = 0; i < cursos.length; i++) {
        printCourses(cursos[i], 2000, (resultado) => {
            console.log(resultado);
        });
       
    }
} else {
    //Se busca el id del curso
    let curso = cursos.find(obj => obj.id === argv.id_asignatura);
    //Si es indefinido
    if (curso === undefined) {
        console.log('Se ingreso un id de asignatura incorrecto.')
    } else {
        //En caso contrario se escribe el archivo con la preinscripcipon
       generateFile(curso, argv);
    }
}

 