
const { Schema, model } = require('mongoose');

const UsuarioShema = Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        require: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
});

//devuelve el usuario con otro key y excluye el _v, extraer el password para que no se muestre ya que va a estar guardado en el Mongo encriptado
UsuarioShema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Usuario', UsuarioShema);

