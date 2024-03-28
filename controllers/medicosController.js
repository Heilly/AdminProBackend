const { response } = require('express');

const Medico = require('../models/medico');
const Usuario = require('../models/usuario');
const Hospital = require('../models/hospital');

const getMedicos = async(req, res = response) => {

    const medicos = await Medico.find()
                                .populate('usuario','nombre img')
                                .populate('hospital','nombre img')


    res.json({
        ok: true,
        medicos
    })
}

const crearMedico = async (req, res = response) => {

    const uid = req.uid;
    const usuario = await Usuario.findById(uid, 'name img');

    
    const uidHospital = req.body['hospital'];
    const hospital = await Hospital.findById(uidHospital);
    console.log(hospital);

    const medico = new Medico({
        ...req.body,
        usuario: usuario,
        hospital: hospital,
        
    });


    try {

        const medicoDB = await medico.save();
        await medico.populate('hospital', 'nombre img').execPopulate();

        
        res.json({
            ok: true,
            medico: medicoDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


}

const buscarMedico = async(req, res = response) => {
    const id  = req.params.id;
    const uid = req.uid;


    try {
        const medico = await Medico.findById( id );
        medico.hospital = await Hospital.findById(medico.hospital).populate('hospital', 'nombre')
        console.log(medico);
        console.log('dataHospitales',medico.hospital);


        res.json({
            ok: true,
            medico: medico
        })
    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

    
}


const actualizarMedico = async(req, res = response) => {
    
    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const medico = await Medico.findById( id );

        if ( !medico ) {
            return res.status(404).json({
                ok: true,
                msg: 'Medico no encontrado por id',
            });
        }

        const cambiosMedico = {
            ...req.body,
            usuario: uid
        }

        const medicoActualizado = await Medico.findByIdAndUpdate( id, cambiosMedico, { new: true } );


        res.json({
            ok: true,
            medico: medicoActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

const borrarMedico = async (req, res = response) => {
   
    const id  = req.params.id;

    try {
        
        const medico = await Medico.findById( id );

        if ( !medico ) {
            return res.status(404).json({
                ok: true,
                msg: 'Medico no encontrado por id',
            });
        }

        await Medico.findByIdAndDelete( id );

        res.json({
            ok: true,
            msg: 'Médico borrado'
        }); 

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}




module.exports = {
    getMedicos,
    crearMedico,
    buscarMedico,
    actualizarMedico,
    borrarMedico
}