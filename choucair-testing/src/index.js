const express = require('express');
const app = express();
//Para unir modulos de directorio
const path = require('path');

// creamos una constante para el servidor
// settings---configuraciones
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares--funciones que se ejecutan antes de que lleguen alas rutas

// routes----rutas del servidor
app.use(require('./routes/index'));


//Static  file---- carpeta entregada al navegador(css,boostrap, imagenes)
app.use(express.static(path.join(__dirname, 'public')));


//listening the server-----escuchar servidor
app.listen(app.get('port'),()=> {
console.log('Server on port', app.get('port'));
});