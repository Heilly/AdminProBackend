
const express = require('express');
require('dotenv').config();
const cors = require('cors')



const { dbConnection } = require('./database/config')


//Crear el servidor
const app = express();

// Base de datos
//mean_user
//6yqKjoCEBJnCtRTz
dbConnection();

// Configurar CORS
app.use( cors() );



// Routas
app.get( '/', (req, res) => {
    res.json( {
        ok: true,
        msg: 'Hola mundo'
    })
})



app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en puesto 3000');
} )
