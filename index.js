
const express = require('express');
require('dotenv').config();
const path = require('path');

const cors = require('cors')



const { dbConnection } = require('./database/config')


//Crear el servidor
const app = express();


// Configurar CORS
app.use( cors() );

//Carpeta pública
app.use( express.static('public'))


//Lectura y  paseo del Body
app.use( express.json() );


// Base de datos
//mean_user
//6yqKjoCEBJnCtRTz
dbConnection();


// Routas
//todas mis rutas van a empezar con api
//CRUD USER
app.use( '/api/usuarios', require('./routes/usuariosRoutes') );
//Login User
app.use( '/api/login', require('./routes/authRouter') );
//Hospitales
app.use( '/api/hospitales', require('./routes/hospitalesRouter') );
app.use( '/api/medicos', require('./routes/medicosRouter') );
app.use( '/api/todo', require('./routes/busquedasRouter') );
app.use( '/api/upload', require('./routes/uploadsRouter') );

// Lo último
app.get('*', (req, res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
});







app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en puesto 3000');
} )
