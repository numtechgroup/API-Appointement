
const express = require('express')

const router = express.Router()

const {createAppointment, allAppointments, deleteAppointmentById, getAppointmentById} = require('../controllers/appointmentController')

router.post('/', createAppointment)
router.get('/', allAppointments)
router.get('/:id', getAppointmentById)
router.delete('/:id', deleteAppointmentById)

module.exports = router 
