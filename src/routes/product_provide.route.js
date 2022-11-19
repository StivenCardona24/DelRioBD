import {Router } from "express";
const { check } = require('express-validator');

const {
    getProductProvide,
    getOneProductProvide,
    addProductProvide,
    updateProductProvide,
    deleteProductProvide

} = require ("../controllers/product_provide.controller")

const router = Router();

router.get("/", getProductProvide);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneProductProvide);

router.post("/", [
    check('producto', 'El producto es obligatorio').isNumeric(),
    check('cliente', 'La cliente es obligatoria').isNumeric(),
   
],addProductProvide);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('producto', 'El producto es obligatorio').isNumeric(),
    check('cliente', 'La cliente es obligatoria').isNumeric(),


],updateProductProvide);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteProductProvide);


export default router;