const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const funciones = require('./funciones');

const directorioPublico = path.join(__dirname, '/public');

app.use(express.static(directorioPublico));
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
  res.render('index')
});

app.get('/ingresarCurso', (req, res) => {
  res.render('crearCurso');
});

app.post('/guardarCurso', (req, res) => {
  respuesta = funciones.guardarCurso(req.body);
  res.render('crearCurso');
});

app.get('/listarCursos', (req, res) => {
  respuesta = funciones.consultaCursosActivos();
  res.render('listaCursos', { cursos: respuesta });

});
 
app.listen(3000) 


// descargue el código fuente con el comando git clone https://github.com/shemas2015/actividad4.git
// Ingrese a la carpeta descargada (acitividad4)
// Ejecute el comando npm install
// Ejecute el comando nodemon src/index.js -e hbs,js