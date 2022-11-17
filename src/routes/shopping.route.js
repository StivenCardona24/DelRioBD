import {Router } from "express";
const { check } = require('express-validator');

const {
    getFarm,
    getOneFarm,
    addFarm,
    updateFarm,
    deleteFarm

} = require ("../controllers/shopping.controller")

const router = Router();

router.get("/", getFarm);

router.get("/:num_compra", [
    check('num_compra', 'No es un num_compra válnum_comprao').isNumeric(),
], getOneFarm);

router.post("/", [
    check('estado_compra', 'El estado_compra es obligatorio').not().isEmpty(),
    

],addFarm);

router.put("/:num_compra",  [
    check('num_compra', 'No es un num_compra válnum_comprao').isNumeric(),

],updateFarm);

router.delete("/:num_compra",[
    check('num_compra', 'No es un num_compra válnum_comprao').isNumeric(),
], deleteFarm);


export default router;