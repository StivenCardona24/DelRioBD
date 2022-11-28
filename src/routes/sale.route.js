import {Router } from "express";
const { check } = require('express-validator');

const {
    getVenta,
    getOneVenta,
    addVenta,
    updateVenta,
    deleteVenta

} = require ("../controllers/sale.controller")

const router = Router();

router.get("/", getVenta);

router.get("/:num_factura", [
    check('num_factura', 'No es un num_factura válnum_facturao').isNumeric(),
], getOneVenta);

router.post("/", [

    check('tipoEntrega', 'La tipoEntrega es obligatoria').isNumeric(),
    check('valor', 'La valor es obligatoria').isNumeric(),
    check('estado_entrega', 'El estado de entrega es obligatorio').isNumeric(),
    check('cliente', 'El cliente  es obligatorio').isNumeric(),
    

],addVenta);

router.put("/:num_factura",  [
    check('num_factura', 'No es un numero de factura ').isNumeric(),
    check('tipoEntrega', 'La tipoEntrega es obligatoria').isNumeric(),
    check('valor', 'La valor es obligatoria').isNumeric(),
    check('estado_entrega', 'El estado de entrega es obligatorio').isNumeric(),
    check('cliente', 'El cliente es obligatorio').isNumeric(),
 
],updateVenta);

router.delete("/:num_factura",[
    check('num_factura', 'No es un numero de factura válnum_facturao').isNumeric(),
], deleteVenta);


export default router;