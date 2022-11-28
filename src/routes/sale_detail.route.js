import {Router } from "express";
const { check } = require('express-validator');

const {
    getDetalle_venta,
    getOneDetalle_venta,
    addDetalle_venta,
    updateDetalle_venta,
    deleteDetalle_venta
    

} = require ("../controllers/sale_detail.controller")

const router = Router();

router.get("/", getDetalle_venta);

router.get("/:numero_venta", [
    check('numero_venta', 'No es un numero de venta valido').isNumeric(),
], getOneDetalle_venta);

router.post("/", [
    check('valor', 'El valor es obligatorio').isNumeric(),
    check('cantidad', 'La cantidad es obligatoria').isNumeric(),
    check('concepto', 'La concepto es obligatoria').isString(),
    check('venta', 'El venta es obligatorio').isNumeric(),
    check('producto', 'El tipo es obligatorio').isNumeric(),
    
],addDetalle_venta);

router.put("/:numero_venta",  [
    check('numero_venta', 'No es un numero_venta valido').isNumeric(),
    check('valor', 'El valor es obligatorio').isNumeric(),
    check('cantidad', 'La cantidad es obligatoria').isNumeric(),
    check('concepto', 'La concepto es obligatoria').isString(),
    check('venta', 'El venta es obligatorio').isNumeric(),
    check('producto', 'El tipo es obligatorio').isNumeric(),
   
],updateDetalle_venta);

router.delete("/:numero_venta",[
    check('numero_venta', 'No es un numero de venta valido').isNumeric(),
], deleteDetalle_venta);


export default router;