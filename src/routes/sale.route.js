import {Router } from "express";
const { check } = require('express-valnum_facturaator');

const {
    getFarm,
    getOneFarm,
    addFarm,
    updateFarm,
    deleteFarm

} = require ("../controllers/sale.controller")

const router = Router();

router.get("/", getFarm);

router.get("/:num_factura", [
    check('num_factura', 'No es un num_factura válnum_facturao').isNumeric(),
], getOneFarm);

router.post("/", [

    check('tipoEntrega', 'La tipoEntrega es obligatoria').isNumeric(),
    check('valor', 'La valor es obligatoria').isNumeric(),
    check('estado_entrega', 'El estado_entrega es obligatorio').isNumeric(),
    check('cliente', 'El tipo es obligatorio').isNumeric(),
    

],addFarm);

router.put("/:num_factura",  [
    check('num_factura', 'No es un num_factura válnum_facturao').isNumeric(),
    check('tipoEntrega', 'La tipoEntrega es obligatoria').isNumeric(),
    check('valor', 'La valor es obligatoria').isNumeric(),
    check('estado_entrega', 'El estado_entrega es obligatorio').isNumeric(),
    check('cliente', 'El tipo es obligatorio').isNumeric(),
 
],updateFarm);

router.delete("/:num_factura",[
    check('num_factura', 'No es un num_factura válnum_facturao').isNumeric(),
], deleteFarm);


export default router;