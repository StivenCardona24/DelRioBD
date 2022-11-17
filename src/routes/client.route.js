import {Router } from "express";
const { check } = require('express-valcedulaator');

const {
    getFarm,
    getOneFarm,
    addFarm,
    updateFarm,
    deleteFarm

} = require ("../controllers/client.controller")

const router = Router();

router.get("/", getFarm);

router.get("/:cedula", [
    check('cedula', 'No es un cedula válcedulao').isNumeric(),
], getOneFarm);

router.post("/", [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('celular', 'La celular es obligatoria').not().isEmpty(),
    check('cantidad_compras', 'La cantidad_compras es obligatoria').isNumeric(),
    check('correo_electronico', 'La correo_electronico es obligatoria').not().isEmpty(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
   
],addFarm);

router.put("/:cedula",  [
    check('cedula', 'No es un cedula válcedulao').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('celular', 'La celular es obligatoria').not().isEmpty(),
    check('cantidad_compras', 'La cantidad_compras es obligatoria').isNumeric(),
    check('correo_electronico', 'La correo_electronico es obligatoria').not().isEmpty(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
   

],updateFarm);

router.delete("/:cedula",[
    check('cedula', 'No es un cedula válcedulao').isNumeric(),
], deleteFarm);


export default router;