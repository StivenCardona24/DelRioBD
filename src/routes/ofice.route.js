import {Router } from "express";
const { check } = require('express-validator');

const {
    getOfice,
    getOneOfice,
    addOfice,
    updateOfice,
    deleteOfice

} = require ("../controllers/ofice.controller")

const router = Router();

router.get("/", getOfice);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneOfice);

router.post("/", [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('direccion', 'La direccion es obligatoria').not().isEmpty(),
  

],addOfice);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('direccion', 'La direccion es obligatoria').not().isEmpty(),
 
],updateOfice);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteOfice);


export default router;