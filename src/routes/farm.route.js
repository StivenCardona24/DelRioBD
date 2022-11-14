import {Router } from "express";
const { check } = require('express-validator');

const {
    getFarm,
    getOneFarm,
    addFarm,
    updateFarm,
    deleteFarm

} = require ("../controllers/farm.controller")

const router = Router();

router.get("/", getFarm);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneFarm);

router.post("/", [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('ciudad', 'La ciudad es obligatoria').isNumeric(),
    check('direccion', 'La direccion es obligatoria').not().isEmpty(),
    check('celular', 'El celular es obligatorio').not().isEmpty(),
    check('tipo_finca', 'El tipo es obligatorio').isNumeric(),
    check('cuenta', 'La cuenta es obligatoria').not().isEmpty(),
    check('oficina', 'La oficina es obligatoria').not().isEmpty(),

],addFarm);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('ciudad', 'La ciudad es obligatoria').isNumeric(),
    check('direccion', 'La direccion es obligatoria').not().isEmpty(),
    check('celular', 'El celular es obligatorio').not().isEmpty(),
    check('tipo_finca', 'El tipo es obligatorio').isNumeric(),
    check('cuenta', 'La cuenta es obligatoria').not().isEmpty(),
    check('oficina', 'La oficina es obligatoria').not().isEmpty(),

],updateFarm);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteFarm);


export default router;