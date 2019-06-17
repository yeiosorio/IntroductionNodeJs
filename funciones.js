const fs = require('fs');

let getCursos = () => {
    try {
        return require("./cursos.json");
    } catch (err) {

        return [];
    }
};

let guardarCurso = (req) => {
    let error = "";
    let data = {
        id: req.id,
        nombre: req.nombreCurso,
        valor: req.valorCurso,
        modalidad: req.modalidadCurso,
        intensidad: req.intensidad,
        estado: "disponible",
        descripcion: req.descripcionCurso,

    };


    cursosJson = getCursos();
    //Valida que el curso no exista
    let duplicado = cursosJson.find(id => id.id === req.id);
    if (duplicado) {
        error = "Atención! Registro duplicado"
    }

    cursosJson.push(data);
    saveCursos(cursosJson);


    return { error: error };
}

let consultaCursosActivos = () => {
    cursosJson = getCursos();
    //Selecciona solo los cursos activos
    console.log(cursosJson);
    let activos = cursosJson.filter(cursos => cursos.estado == 'disponible');
    

    return activos;
}

let saveCursos = (cursos) => {
    
    console.log(cursos);
    
    let json = JSON.stringify(cursos);
    fs.writeFile('cursos.json', json, 'utf8', (error) =>{
        console.log('archivo guardado con exito!');
        
    });
}

module.exports = {
    guardarCurso,
    consultaCursosActivos
};