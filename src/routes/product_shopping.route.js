import {Router } from "express";
const { check } = require('express-validator');

const {
    getFarm,
    getOneFarm,
    addFarm,
    updateFarm,
    deleteFarm

} = require ("../controllers/product_shopping.controller")

const router = Router();

router.get("/", getFarm);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneFarm);

router.post("/", [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('precio', 'La precio es obligatoria').isNumeric(),
 

],addFarm);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('precio', 'La precio es obligatoria').isNumeric(),


],updateFarm);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteFarm);


export default router;