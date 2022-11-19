import {Router } from "express";
const { check } = require('express-validator');

const {
    getDependence,
    getOneDependence,
    addDependence,
    updateDependence,
    deleteDependence
} = require ("../controllers/dependence.controller")

const router = Router();

router.get("/", getDependence);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneDependence);

router.post("/", [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),

    
],addDependence);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
   
],updateDependence);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
],deleteDependence);


export default router;