import {Router } from "express";
const { check } = require('express-validator');

const {
    getPosition,
    getOnePosition,
    addPosition,
    updatePosition,
    deletePosition

} = require ("../controllers/position.controller")

const router = Router();

router.get("/", getPosition);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOnePosition);

router.post("/", [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),


],addPosition);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
   

],updatePosition);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deletePosition);


export default router;