import {Router } from "express";
const { check } = require('express-validator');

const {
    getType_product,
    getOneType_product,
    addType_product,
    updateType_product,
    deleteType_product


} = require ("../controllers/type_product.controller")

const router = Router();

router.get("/", getType_product);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneType_product);

router.post("/", [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    

],addType_product);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    

],updateType_product);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteType_product);


export default router;