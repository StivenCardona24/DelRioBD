import {Router } from "express";
const { check } = require('express-validator');

const {
    getType_farm,
    getOneType_farm,
    addType_farm,
    updateType_farm,
    deleteType_farm

} = require ("../controllers/type_farm.controller")

const router = Router();

router.get("/", getType_farm);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneType_farm);

router.post("/", [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    

],addType_farm);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    

],updateType_farm);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteType_farm);


export default router;