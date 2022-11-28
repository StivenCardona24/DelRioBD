import {Router } from "express";
const { check } = require('express-validator');

const {
    getShopping_detail,
    getOneShopping_detail,
    addShopping_detail,
    updateShopping_detail,
    deleteShopping_detail

} = require ("../controllers/shopping_detail.controller")

const router = Router();

router.get("/", getShopping_detail);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneShopping_detail);

router.post("/", [
    
    check('valor', 'La valor es obligatoria').isNumeric(),
    check('cantidad', 'La cantidad es obligatoria').isNumeric(),
    check('compra', 'la compra es obligatorio').isNumeric(),

],addShopping_detail);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(), 
    check('valor', 'La valor es obligatoria').isNumeric(),
    check('cantidad', 'La cantidad es obligatoria').isNumeric(),
    check('compra', 'la compra es obligatorio').isNumeric(),
    check('producto', 'El producto es obligatorio').isNumeric(),

],updateShopping_detail);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteShopping_detail);


export default router;