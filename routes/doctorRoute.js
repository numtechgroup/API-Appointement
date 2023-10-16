
const express = require('express')
const router = express.Router()

const {getAllDoctors, createDoctor, getDoctorById, updateDoctorById, deleteDoctorById} = require('../controllers/doctorController')

router.get('/', getAllDoctors)
router.get('/:id', getDoctorById)

router.post('/', createDoctor)

router.put('/:id', updateDoctorById)

router.delete('/:id', deleteDoctorById)





module.exports = router 