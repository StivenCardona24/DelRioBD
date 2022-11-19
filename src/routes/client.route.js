import {Router } from "express";
const { check } = require('express-validator');

const {
    getClient,
    getOneClient,
    addClient,
    updateClient,
    deleteClient

} = require ("../controllers/client.controller")

const router = Router();

router.get("/", getClient);

router.get("/:cedula", [
    check('cedula', 'No es una cedula valida').isNumeric(),
], getOneClient);

router.post("/", [
    check('cedula', 'No es una cedula valida').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('celular', 'La celular es obligatoria').not().isEmpty(),
    check('cantidad_compras', 'Ingrese un valor valido').isNumeric(),
    check('correo', 'El correo es obligatoria').not().isEmpty(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
   
],addClient);

router.put("/:cedula",  [
    check('cedula', 'No es una cedula valida').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('celular', 'La celular es obligatoria').not().isEmpty(),
    check('cantidad_compras', 'Ingrese un valor valido').isNumeric(),
    check('correo', 'El correo es obligatoria').not().isEmpty(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
   

],updateClient);

router.delete("/:cedula",[
    check('cedula', 'No es una cedula valida').isNumeric(),
], deleteClient);


export default router;