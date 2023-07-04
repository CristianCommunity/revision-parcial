const { where } = require('sequelize');
const Reserva = require('../models/Reserva');
const ctrl = {};

ctrl.renderListaReservas = (req, res) => {
    res.render('listado-reservas')
    }

ctrl.renderNuevaReserva = (req, res) => {
    res.render('nueva-reserva')
}

ctrl.renderEditarReserva = (req, res) => {
    const { id } = req.params;
    res.render('editar-reserva', { id })
}
// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener una reserva
ctrl.obtenerReserva = async (req, res) => {
    try{
    const reservas = await Reserva.findAll({
        where: {
            estado: true
        }
    })
    return res.json(reservas)
  }   
    catch(error) {
    console.log('Error al obtener las reservas', error);
        return res.status(500).json({
            message: 'Error al obtener las reservas'
        })

  }
}


// Crear una reserva
ctrl.crearReserva = async (req, res) => {
  try{  
    const {
        nombre,
        apellido,
        fecha_ingreso,
        fecha_salida,
        habitación,
        cantidad_personas,
        telefono, 
        email
        } = req.body

     const nuevaReserva = new Reserva({
        nombre,
        apellido,
        fecha_ingreso,
        fecha_salida,
        habitación,
        cantidad_personas,
        telefono,
        email
     });
     //Se guarda en la BD
     await nuevaReserva.save()
     return res.status(201).json({
        message: 'Reserva guardada en la BD'

    })
    }  
    catch(error) {
    console.log('Error al crear la reserva', error);
        return res.status(500).json({
            message: 'Error al crear la reserva'
        })
}
}

// Actualizar una reserva
ctrl.actualizarReserva = async (req, res) => {
    
}


// Eliminar una reserva de forma lógica
ctrl.eliminarReserva = async (req, res) => {
    
}

module.exports = ctrl;