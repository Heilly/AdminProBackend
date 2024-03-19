const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');
const { googleVerify } = require('../helpers/goolge-sign-in');

const login = async( req, res) => {

    const { email, password } = req.body;

    try {
        
        // Verificar email
        const usuarioDB = await Usuario.findOne({ email });

        if ( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        // Verificar contraseña( si la contraseña del body es igual a la contraseña de la bbdd)
        const validPassword = bcrypt.compareSync( password, usuarioDB.password );
        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }

        // Si las contraseñas coinciden Generar el TOKEN - JWT
        const token = await generarJWT( usuarioDB.id );


        res.json({
            ok: true,
            usuarioDB,
            token  
        })

    }  catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }
}

const googleSignIn = async( req, res = response ) => {
    console.log('req:', req);

    try {
        //Desde mi index.html hago un fetcha google donde guarda el token en el body
        /*fetch( url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: response.credential })
        })
        .then( resp => resp.json() )
        .then( data => console.log('Nuestro server', data) )
        .catch( console.log ) */
        //Luego extraigo el token y lo verifico en mi helpers/google-sing-in, obteniendo de esta forma los datos del usuario (payload),
        const { email, name, picture } = await googleVerify( req.body.token );
        console.log(req.body.token);

        const usuarioDB = await Usuario.findOne({ email });
        
        let usuario;
        
        if ( !usuarioDB ) {
            usuario = new Usuario({
                name: name,
                email,
                password: '@@@',
                img: picture,
                google: true
            })
        } else {
            usuario = usuarioDB;
            usuario.google = true;
            // usuario.password = '@@';
        }
        //console.log(usuario);
        
        // Guardar Usuario
       /* await usuario.save();*/
        usuario.save();
        // Generar el TOKEN - JWT
        const token = await generarJWT( usuario.id );


        res.json({
            ok: true,
            email, name, picture, token
        });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Token de Google no es correcto'
        });
    }
};

const renweToken = async( req, res = response ) => {
    const uid = req.uid;

    // Generar el TOKEN - JWT
    const token = await generarJWT( uid );

    

    res.json({
        ok: true,
        uid,
        token
    });
}

module.exports = {
    login,
    googleSignIn,
    renweToken
}