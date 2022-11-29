import {Router } from "express";
const { check } = require('express-validator');


const {
    getValidator

} = require ("../controllers/login.controller")


const router = Router();


router.post("/", [


    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('contrasenia', 'La contrasenia es obligatoria').not().isEmpty(),
  

],getValidator);

export default router;