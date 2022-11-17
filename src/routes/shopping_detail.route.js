import {Router } from "express";
const { check } = require('express-validator');

const {
    getFarm,
    getOneFarm,
    addFarm,
    updateFarm,
    deleteFarm

} = require ("../controllers/shopping_detail.controller")

const router = Router();

router.get("/", getFarm);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneFarm);

router.post("/", [
    check('detalle', 'El detalle es obligatorio').not().isEmpty(),
    check('valor', 'La valor es obligatoria').isNumeric(),
    check('cantidad', 'La cantidad es obligatoria').isNumeric(),
    check('compra', 'El compra es obligatorio').isNumeric(),
    check('proveedor', 'El tipo es obligatorio').isNumeric(),

],addFarm);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('detalle', 'El detalle es obligatorio').not().isEmpty(),
    check('valor', 'La valor es obligatoria').isNumeric(),
    check('cantidad', 'La cantidad es obligatoria').isNumeric(),
    check('compra', 'El compra es obligatorio').isNumeric(),
    check('proveedor', 'El tipo es obligatorio').isNumeric(),

],updateFarm);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteFarm);


export default router;