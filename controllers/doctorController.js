const Doctor = require('../models/doctorModel')

exports.getAllDoctors = async (req, res) => {
    try{
        const doctors = await  Doctor.find()
        return res.status(200).json(doctors)
    }catch(err){
        return res.status(500).json({
            message: "Erreur lors de la recuperation des des doctors",
            error: err.message
        })
    }
}

exports.createDoctor = async (req, res) =>{
    try{
        const newDoctor = new Doctor(req.body)
        const savedDoctor = await newDoctor.save()
        res.status(201).json(savedDoctor)
    }catch(err){
        return res.status(400).json({
            error : err.message
        })
    }
}

exports.getDoctorById = async (req, res) =>{
    try{
        const doctor = await Doctor.findById(req.params.id)
        if(!doctor){
            return res.status(400).json({message: "Medcin non trouvé "})
        }
        return res.status(200).json(doctor)
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}

exports.updateDoctorById = async (req, res) =>{
    try{
        const updateDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true
        })
        if (!updateDoctor) {
            return res.status(400).json({message: "Medcin non trouvé"})
        }
        return res.status(200).json(updateDoctor)
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}

exports.deleteDoctorById = async (req, res) =>{
    try{
        const deleteDoctor = await Doctor.findByIdAndRemove(req.params.id)
        if (!deleteDoctor) {
            return res.status(404).json({ message: "Medcin non trouvé "})
        }
        res.status(200).json({ message: "Medcin supprimer avec succés "})
    }catch(err){
        return res.status(500).json({ message: err.message})
    }
}