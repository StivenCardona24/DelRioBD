import {Router } from "express";
const { check } = require('express-validator');

const {
    getFarm,
    getOneFarm,
    addFarm,
    updateFarm,
    deleteFarm

} = require ("../controllers/ofice.controller")

const router = Router();

router.get("/", getFarm);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneFarm);

router.post("/", [
    check('direccion', 'El direccion es obligatorio').not().isEmpty(),
  

],addFarm);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('direccion', 'El direccion es obligatorio').not().isEmpty(),
 
],updateFarm);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteFarm);


export default router;