import {Router } from "express";
const { check } = require('express-validator');

const {
    getProduct,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct

} = require ("../controllers/product.controller")

const router = Router();

router.get("/", getProduct);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneProduct);

router.post("/", [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('precio', 'La precio es obligatoria').isDecimal(),
    check('catidad', 'La catidad es obligatoria').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('tipo', 'El tipo es obligatorio').isNumeric(),
    check('finca', 'Elntipo de finca es incorrecto').isNumeric(),
 

],addProduct);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('precio', 'La precio es obligatoria').isNumeric(),
    check('catidad', 'La catidad es obligatoria').not().isEmpty(),
    check('decripcion', 'El decripcion es obligatorio').not().isEmpty(),
    check('tipo', 'El tipo es obligatorio').isNumeric(),
    check('finca', 'Elntipo de finca es incorrecto').isNumeric(),

    

],updateProduct);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteProduct);


export default router;