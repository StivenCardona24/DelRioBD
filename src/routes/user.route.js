import {Router } from "express";
const { check } = require('express-validator');

const {
    getFarm,
    getOneFarm,
    addFarm,
    updateFarm,
    deleteFarm

} = require ("../controllers/user.controller")

const router = Router();

router.get("/", getFarm);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneFarm);

router.post("/", [
    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check('contrasenia', 'La contrasenia es obligatoria').isNumeric(),
 
],addFarm);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check('contrasenia', 'La contrasenia es obligatoria').isNumeric(),

],updateFarm);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteFarm);


export default router;