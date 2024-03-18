
/*
    Ruta: /api/usuarios
*/

const {Router} = require('express');
const { getUser,createUser, putUser, deleteUser } = require('../controllers/usuariosController');
const { check } = require('express-validator');
const { validarCampos } = require("../middleware/validar-campos");
const { validarJWT } = require('../middleware/validar-jwt');

const router = Router();


//Obtener todos los Usuarios
router.get( '/', validarJWT, getUser );

//Para crear un Middleware lo mando como segundo argumento y luego el controlador, para usar el Middleware instale npm i express-validator@6.6.0
//para enviar vario Middleware se ponen entre []
router.post( '/', 
    [
        //Todas las rutas que esten proteginas en el middelware
        validarJWT,
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos,
    ], 
    createUser );

//Actualizar usuario 
router.put( '/:id', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        //check('role', 'El role es obligatorio').not().isEmpty(),
        validarCampos,
    ], 
    putUser  );

//Eliminar usuario 
router.delete( '/:id', validarJWT,deleteUser  );





module.exports = router;