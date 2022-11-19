import {Router } from "express";
const { check } = require('express-validator');

const {
    getDepartment,
    getOneDepartment,
    addDepartment,
    updateDepartment,
    deleteDepartment

} = require ("../controllers/department.controller")

const router = Router();

router.get("/", getDepartment);

router.get("/:id", [
    check('id', 'No es un ID válido').isNumeric(),
], getOneDepartment);

router.post("/", [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
   

],addDepartment);

router.put("/:id",  [
    check('id', 'No es un ID válido').isNumeric(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    
],updateDepartment);

router.delete("/:id",[
    check('id', 'No es un ID válido').isNumeric(),
], deleteDepartment);


export default router;