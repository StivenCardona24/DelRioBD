import {Router } from "express";
const { check } = require('express-validator');

const {
    getFarm,
    getOneFarm,
    addFarm,
    updateFarm,
    deleteFarm

} = require ("../controllers/product_detail.controller")

const router = Router();

router.get("/", getFarm);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneFarm);

router.post("/", [
    check('producto', 'El producto es obligatorio').isNumeric(),
    check('cliente', 'La cliente es obligatoria').isNumeric(),
   
],addFarm);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('producto', 'El producto es obligatorio').isNumeric(),
    check('cliente', 'La cliente es obligatoria').isNumeric(),


],updateFarm);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteFarm);


export default router;