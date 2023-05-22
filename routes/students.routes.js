const Router = require("express");
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

router.get("/", getStudents); 

router.get("/:id", getStudentById); 

router.post("/", [
    body ('firstName').notEmpty().withMessage('El nombre es obligatorio'),
    body ('firstName').isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
    body ('lastName').notEmpty().withMessage('El apellido es obligatorio'),
    body ('lastName').isLength({min: 3}).withMessage('El apellido debe tener al menos 3 caracteres'), 
    body ('currentYearOfStudy').notEmpty().withMessage('El año de estudio es obligatorio'),
    body ('phone').notEmpty().withMessage('El teléfono es obligatorio'),
    body ('address').notEmpty().withMessage('La dirección es obligatoria'),
    body ('birthDate').notEmpty().withMessage('La fecha de nacimiento es obligatoria'),
    validateErrors,
], createStudent); 

router.put(
  "/:id", [
    body ('firstName').notEmpty().withMessage('El nombre es obligatorio'),
    body ('firstName').isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
    body ('lastName').notEmpty().withMessage('El apellido es obligatorio'),
    body ('lastName').isLength({min: 3}).withMessage('El apellido debe tener al menos 3 caracteres'), 
    body ('currentYearOfStudy').notEmpty().withMessage('El año de estudio es obligatorio'),
    body ('phone').notEmpty().withMessage('El teléfono es obligatorio'),
    body ('address').notEmpty().withMessage('La dirección es obligatoria'),
    body ('birthDate').notEmpty().withMessage('La fecha de nacimiento es obligatoria'),
    validateErrors,
],

  editStudent
);

router.delete("/:id", deleteStudent); 

module.exports = router;
