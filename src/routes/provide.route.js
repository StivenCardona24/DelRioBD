import {Router } from "express";
const { check } = require('express-validator');

const {
    getProvide,
    getOneProvide,
    addProvide,
    updateProvide,
    deleteProvide

} = require ("../controllers/provide.controller")

const router = Router();

router.get("/", getProvide);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneProvide);

router.post("/", [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
   

],addProvide);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
],updateProvide);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteProvide);


export default router;