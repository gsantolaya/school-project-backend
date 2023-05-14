const Router = require('express');
const { getStudents, getStudentById, createStudent, editStudent, deleteStudent} = require('../controllers/students.controllers');
const router = Router()
//const { body } = require('express-validator');
// const { validateErrors } = require('../middlewares/validateErrors');
//const { jwtValidation } = require('../middlewares/jwtValidation');

router.get('/', getStudents) //, jwtValidation

router.get('/:id', getStudentById)//, jwtValidation

router.post("/"
// ,[
//     body('email').isEmail().withMessage('El email debe ser un email válido'),
//     body('firstName').notEmpty().withMessage('El nombre es obligatorio'),
//     body('firstName').isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
//     body('lastName').notEmpty().withMessage('El apellido es obligatorio'),
//     body('lastName').isLength({min: 3}).withMessage('El apellido debe tener al menos 3 caracteres'),
//     body('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
//     body('password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/).withMessage('La contraseña debe tener al menos una mayúscula, una minúscula y un número'),
//     validateErrors,
// ]
,createStudent)

router.put('/:id'
// ,[
//     body('email').isEmail().withMessage('El email debe ser un email válido'),
//     body('firstName').notEmpty().withMessage('El nombre es obligatorio'),
//     body('firstName').isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
//     body('lastName').notEmpty().withMessage('El apellido es obligatorio'),
//     body('lastName').isLength({min: 3}).withMessage('El apellido debe tener al menos 3 caracteres'),
//     body('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
//     body('password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/).withMessage('La contraseña debe tener al menos una mayúscula, una minúscula y un número'),
//     validateErrors,
//     jwtValidation
// ]
,
editStudent)


router.delete("/:id", deleteStudent)//jwtValidation,

module.exports = router;