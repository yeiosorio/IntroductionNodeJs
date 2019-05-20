const cursos = require('./data.js');
const fs = require('fs');

let writeFile = (data) => {

    body = data;

    fs.writeFile('inscripcion.txt', body, (error) => {
        if(error) throw (error);
        console.log('se ha creado el archivo')
    } )
}