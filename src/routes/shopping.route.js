import {Router } from "express";
const { check } = require('express-validator');

const {
    getShooping,
    getOneShooping,
    addShooping,
    updateShooping,
    deleteShooping


} = require ("../controllers/shopping.controller")

const router = Router();

router.get("/", getShooping);

router.get("/:num_compra", [
    check('num_compra', 'No es un numero de  compra valido').isNumeric(),

], getOneShooping);

router.post("/", [
    check('total', 'El total es obligatorio').not().isEmpty(),
    check('id_finca', 'El id finca es obligatorio').not().isEmpty(),
    
    

],addShooping);

router.put("/:num_compra",  [
    check('num_compra', 'No es un num_compra valido').isNumeric(),
    check('total', 'El total es obligatorio').not().isEmpty(),
    check('id_finca', 'El id_finca es obligatorio').not().isEmpty(),
    

    


],updateShooping);

router.delete("/:num_compra",[
    check('num_compra', 'No es un num de compra valido').isNumeric(),
], deleteShooping);


export default router;