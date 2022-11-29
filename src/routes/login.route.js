


const {
    getValidator

} = require ("../controllers/login.controller")




router.post("/", [


    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('contrasenia', 'La contrasenia es obligatoria').not().isEmpty(),
  

],getValidator);
