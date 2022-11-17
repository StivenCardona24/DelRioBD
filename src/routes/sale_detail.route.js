import {Router } from "express";
const { check } = require('express-valnumero_ventaator');

const {
    getFarm,
    getOneFarm,
    addFarm,
    updateFarm,
    deleteFarm

} = require ("../controllers/sale_detail.controller")

const router = Router();

router.get("/", getFarm);

router.get("/:numero_venta", [
    check('numero_venta', 'No es un numero_venta valido').isNumeric(),
], getOneFarm);

router.post("/", [
    check('valor', 'El valor es obligatorio').isNumeric(),
    check('cantidad', 'La cantidad es obligatoria').isNumeric(),
    check('concepto', 'La concepto es obligatoria').not().isEmpty(),
    check('venta', 'El venta es obligatorio').isNumeric(),
    check('producto', 'El tipo es obligatorio').isNumeric(),
    
],addFarm);

router.put("/:numero_venta",  [
    check('numero_venta', 'No es un numero_venta valido').isNumeric(),
    check('valor', 'El valor es obligatorio').isNumeric(),
    check('cantidad', 'La cantidad es obligatoria').isNumeric(),
    check('concepto', 'La concepto es obligatoria').not().isEmpty(),
    check('venta', 'El venta es obligatorio').isNumeric(),
    check('producto', 'El tipo es obligatorio').isNumeric(),
   
],updateFarm);

router.delete("/:numero_venta",[
    check('numero_venta', 'No es un numero_venta valido').isNumeric(),
], deleteFarm);


export default router;