import {Router } from "express";
const { check } = require('express-validator');

const {
    getDelivery,
    getOneDelivery,
    addDelivery,
    updateDelivery,
    deleteDelivery

} = require ("../controllers/delivery_status.controller")

const router = Router();

router.get("/", getDelivery);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneDelivery);

router.post("/", [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),


],addDelivery);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
 

],updateDelivery);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteDelivery);


export default router;