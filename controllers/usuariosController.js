const { get, route } = require("../routes/usuariosRoutes");
const { response } = require("express");

//Instalaacion de npm i bcryptjs@2.4.3 para encriptar contraseña de una sola via
const bcrypt = require('bcryptjs')

const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/jwt");

const getUser = async(req, res) => {
    //paginacion
    const desde = Number(req.query.desde) || 0;
    console.log(desde);


    //Obtengo todos mis usuarios con todos sus parametros
    //const usuarios = await Usuario.find();
    //Obtengo todos mis usuarios con parametros especificos
    /*const usuarios = await Usuario
                            .find({}, 'name email role google')
                            .skip( desde )
                            .limit( 5 );

    const total = await Usuario.count();*/

    const [usuarios, total] = await Promise.all([
        Usuario
            .find({}, 'name email role google')
            .skip( desde )
            .limit( 5 ),
        Usuario.count()
    ]);

    res.json( {
        ok: true,
        usuarios,
        total
    })
};

const createUser = async( req, res = response ) => {

    const { email, password, name } = req.body;

    try {
        const existeEmail = await Usuario.findOne({ email });

        if(existeEmail){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya esta registrado'
            });
        }
        const usuario = new Usuario (req.body );

        //Encriptar constraseña y cuando se guarda el usuario retornar un token de acceso
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        //Gardar Usuario
        await usuario.save();

        //Generar el TOKEN - JWT
        const token = await generarJWT( usuario.id );

        
        //console.log(req);
        //console.log(email, password, name);

        res.json( {
            ok: true,
            usuario,
            token,
            msg: 'Creando Usuario'
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error insesperado... revisar log'
        })
    }
}

const putUser = async (req, res = response) => {

    // TODO: Validar token y comprobar si es el usuario correcto

    const uid = req.params.id;


    try {

        const usuarioDB = await Usuario.findById( uid );

        if ( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario por ese id'
            });
        }

        // Actualizaciones
        const { password, google, email, ...campos } = req.body;

        if ( usuarioDB.email !== email ) {

            const existeEmail = await Usuario.findOne({ email });
            if ( existeEmail ) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un usuario con ese email'
                });
            }
        }
        if( !usuarioDB.google ){
        campos.email = email;
        } else if(usuarioDB.google !== email){
            return res.status(400).json({
                ok: false,
                msg: 'Usuarios de google no pueden cambiar su correo'
            });
        }
        const usuarioActualizado = await Usuario.findByIdAndUpdate( uid, campos, { new: true } );

        res.json({
            ok: true,
            usuario: usuarioActualizado
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }

};

const deleteUser = async( req, res ) => {

    const uid = req.params.id;

    try {
        const usuarioDB = await Usuario.findById( uid );

        if ( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario por ese id'
            });
        }

        await Usuario.findByIdAndDelete( uid );
        res.json({
            ok: true,
            msg: 'Usuario eliminado'
        });

    } catch (error) {
        
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}


module.exports = {
    getUser,
    createUser,
    putUser,
    deleteUser
}