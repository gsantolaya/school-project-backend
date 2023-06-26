const Router = require("express");
const { jwtValidation } = require('../middlewares/jwtValidation');


const {
  getStudents,
  getStudentById,
  createStudent,
  editStudent,
  deleteStudent,
} = require("../controllers/students.controllers");
const { body } = require('express-validator');
const router = Router();
const { validateErrors } = require ("../middlewares/validateErrors")

router.get("/", jwtValidation, getStudents); 

router.get("/:id", jwtValidation, getStudentById); 

router.post("/", [
    body ('firstName').notEmpty().withMessage('El nombre es obligatorio'),
    body ('firstName').isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
    body ('firstName').isLength({max: 30}).withMessage('El nombre debe tener como máximo 30 caracteres'),
    body ('lastName').notEmpty().withMessage('El apellido es obligatorio'),
    body ('lastName').isLength({min: 3}).withMessage('El apellido debe tener al menos 3 caracteres'),
    body ('lastName').isLength({max: 30}).withMessage('El apellido debe tener como máximo 30 caracteres'), 
    body ('dni').notEmpty().withMessage('El dni es obligatorio'),
    body ('dni').isLength({min: 3}).withMessage('El dni debe tener al menos 6 caracteres'),
    body ('currentYearOfStudy').notEmpty().withMessage('El año de estudio es obligatorio'),
    body ('payment').notEmpty().withMessage('El estado de pago es obligatorio'),
    body('email').notEmpty().withMessage('El email es obligatorio').isEmail().withMessage('Debe ingresar un correo electrónico válido'),
    body ('birthdate').notEmpty().withMessage('La fecha de nacimiento es obligatoria'),
    validateErrors,
], jwtValidation, createStudent); 

router.put(
  "/:id", [
    body ('firstName').notEmpty().withMessage('El nombre es obligatorio'),
    body ('firstName').isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
    body ('firstName').isLength({max: 30}).withMessage('El nombre debe tener como máximo 30 caracteres'),
    body ('lastName').notEmpty().withMessage('El apellido es obligatorio'),
    body ('lastName').isLength({min: 3}).withMessage('El apellido debe tener al menos 3 caracteres'),
    body ('lastName').isLength({max: 30}).withMessage('El apellido debe tener como máximo 30 caracteres'), 
    body ('dni').notEmpty().withMessage('El dni es obligatorio'),
    body ('dni').isLength({min: 3}).withMessage('El dni debe tener al menos 6 caracteres'),
    body ('currentYearOfStudy').notEmpty().withMessage('El año de estudio es obligatorio'),
    body ('payment').notEmpty().withMessage('El estado de pago es obligatorio'),
    body('email').notEmpty().withMessage('El email es obligatorio').isEmail().withMessage('Debe ingresar un correo electrónico válido'),
    body ('birthdate').notEmpty().withMessage('La fecha de nacimiento es obligatoria'),
    validateErrors,
], jwtValidation, editStudent);

router.patch(
  "/:id/payment", [
  body ('payment').notEmpty().withMessage('El estado de pago es obligatorio'),
  validateErrors,
], jwtValidation, editStudent);

router.delete("/:id", jwtValidation, deleteStudent); 

module.exports = router;
