import {Router } from "express";
const { check } = require('express-validator');

const {
    getCity,
    getOneCity,
    addCity,
    updateCity,
    deleteCity

} = require ("../controllers/city.controller")

const router = Router();

router.get("/", getCity);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneCity);

router.post("/", [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('departamento', 'La departamento es obligatorio').isNumeric(),
  
],addCity);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('departamento', 'La departamento es obligatorio').isNumeric(),
    
],updateCity);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteCity);


export default router;