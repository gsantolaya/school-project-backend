const Students = require("../models/student.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// Obtener todos los estudiantes
const getStudents = async (req, res) => {
    try {
        const students = await Students.find()
        res.send(students)
    } catch (error) {
        res.status(404).send(error)
    }
}

// Obtener un estudiante por ID
const getStudentById = async (req, res) => {
    try {
        const id = req.params.id
        const student = await Students.findById(id)
        res.send(student)
    } catch (error) {
        res.status(404).send(error)
    }
}

// Crear un nuevo estudiante
const createStudent = async (req, res) => {
    try {
        const newStudent = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dni:req.body.dni,
            currentYearOfStudy: req.body.currentYearOfStudy,
            payment: req.body.payment,
            phone: req.body.phone,
            address: req.body.address,
            email:req.body.email,
            birthdate: req.body.birthdate,
            isBanned: req.body.isBanned,
            notes: req.body.notes
        }
        const student = Students.create(newStudent)
        res.status(201).send({ mensaje: "Estudiante agregado con éxito", estudiante: newStudent })
    } catch (error) {
        res.status(404).send(error)
    }
}

// Modificar un estudiante
const editStudent = async(req, res)=>{
    const id = req.params.id
    const studentEdited = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dni:req.body.dni,
        currentYearOfStudy: req.body.currentYearOfStudy,
        payment: req.body.payment,
        phone: req.body.phone,
        address: req.body.address,
        email:req.body.email,
        birthdate: req.body.birthdate,
        isBanned: req.body.isBanned,
        notes: req.body.notes
    }
    try {
        const student = await Students.findByIdAndUpdate(id,studentEdited)
        res.status(200).send({ mensaje: "Estudiante modificado con éxito", estudiante: studentEdited })
    } catch (error) {
        res.status(404).send(error)
    }
}

// Modificar el estado de pago de un estudiante
const editPaymentStatus = async (req, res) => {
    const id = req.params.id;
    const { payment } = req.body;
  
    try {
      const student = await Students.findByIdAndUpdate(id, { payment });
      res.status(200).send({ mensaje: "Estado de pago modificado con éxito", payment });
    } catch (error) {
      res.status(404).send(error);
    }
  };
 
const deleteStudent = async(req, res)=>{
    const id = req.params.id
        try {
        const student = await Students.findByIdAndDelete(id)
        res.send({ mensaje: "Estudiante eliminado con éxito", estudiante: student })
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    editStudent,
    editPaymentStatus,
    deleteStudent
}