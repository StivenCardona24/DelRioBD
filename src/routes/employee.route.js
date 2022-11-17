import {Router } from "express";
const { check } = require('express-validator');

const {
    getFarm,
    getOneFarm,
    addFarm,
    updateFarm,
    deleteFarm

} = require ("../controllers/employee.controller")

const router = Router();

router.get("/", getFarm);

router.get("/:cedula", [
    check('cedula', 'No es un cedula válcedulao').isNumeric(),
], getOneFarm);

router.post("/", [
    check('primer_nombre', 'El primer_nombre es obligatorio').not().isEmpty(),
    check('segundo_nombre', 'La segundo_nombre es obligatoria').not().isEmpty(),
    check('primer_apellido', 'La primer_apellido es obligatoria').not().isEmpty(),
    check('segundo_apelido', 'El segundo_apelido es obligatorio').not().isEmpty(),
    check('estudios', 'El tipo es obligatorio').not().isEmpty(),
    check('sueldo', 'La sueldo es obligatoria').isNumeric(),
    check('cargo', 'La cargo es obligatoria').isNumeric(),
    check('fecha_nacimiento', 'La fecha_nacimiento es obligatoria').not().isEmpty(),
    check('dependencia', 'La dependencia es obligatoria').isNumeric(),
    check('oficina', 'La oficina es obligatoria').isNumeric(),
    check('finca', 'La finca es obligatoria').isNumeric(),
],addFarm);

router.put("/:cedula",  [
    check('cedula', 'No es un cedula válcedulao').isNumeric(),
    check('primer_nombre', 'El primer_nombre es obligatorio').not().isEmpty(),
    check('segundo_nombre', 'La segundo_nombre es obligatoria').not().isEmpty(),
    check('primer_apellido', 'La primer_apellido es obligatoria').not().isEmpty(),
    check('segundo_apelido', 'El segundo_apelido es obligatorio').not().isEmpty(),
    check('estudios', 'El tipo es obligatorio').not().isEmpty(),
    check('sueldo', 'La sueldo es obligatoria').isNumeric(),
    check('cargo', 'La cargo es obligatoria').isNumeric(),
    check('fecha_nacimiento', 'La fecha_nacimiento es obligatoria').not().isEmpty(),
    check('dependencia', 'La dependencia es obligatoria').isNumeric(),
    check('oficina', 'La oficina es obligatoria').isNumeric(),
    check('finca', 'La finca es obligatoria').isNumeric(),

],updateFarm);

router.delete("/:cedula",[
    check('cedula', 'No es un cedula válcedulao').isNumeric(),
], deleteFarm);


export default router;