import {Router } from "express";
const { check } = require('express-validator');

const {
     getType_deliery,
    getOneType_deliery,
    addType_deliery,
    updateType_deliery,
    deleteType_deliery

} = require ("../controllers/type_delivery.controller")

const router = Router();

router.get("/", getType_deliery);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneType_deliery);

router.post("/", [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
 
],addType_deliery);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),

],updateType_deliery);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteType_deliery);


export default router;