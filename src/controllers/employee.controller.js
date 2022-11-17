import { getConnection } from "../database/database";

const getFarm = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM empleado';
    await connection.query(sql, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(results.length > 0){
            res.status(200).json(results);
        }
        else{
            res.send("Not results")
        }
    });
    
};
const getOneFarm = async (req, res) =>{
    const connection = await getConnection();
    const { cedula } = req.params;
    const sql = `SELECT * FROM empleado WHERE cedula = ${cedula}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una empleado con el cedula ${cedula}`)
        }
    });
    
};

const addFarm = async (req, res) =>{
    const connection = await getConnection();
    const {primer_nombre, segundo_nombre, primer_apellido, segundo_apelido, estudios, sueldo, cargo, fecha_nacimiento, dependencia, oficina, finca } = req.body;

    //const sql = `INSERT INTO empleado (primer_nombre, segundo_nombre, primer_apellido, segundo_apelido, estudios, sueldo, cargo, fecha_nacimiento, dependencia, oficina, finca) VALUES ( "${primer_nombre}", ${segundo_nombre}, "${primer_apellido}", "${segundo_apelido}", "${estudios}", "${sueldo}", "${cargo}", "${fecha_nacimiento}", "${dependencia}", "${oficina}", "${finca}" )`;
    const sql = "INSERT INTO empleado SET ?";
    const farm = {
        primer_nombre, segundo_nombre, primer_apellido, segundo_apelido, estudios, sueldo, cargo, fecha_nacimiento, dependencia, oficina, finca
    }
    await connection.query(sql,farm, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "empleado creada"})
        }
    });
    
};


const updateFarm = async (req, res) =>{
    const connection = await getConnection();
    const { cedula } = req.params;
    const {primer_nombre, segundo_nombre, primer_apellido, segundo_apelido, estudios, sueldo, cargo, fecha_nacimiento, dependencia, oficina, finca } = req.body;

    const farm = {
        primer_nombre, segundo_nombre, primer_apellido, segundo_apelido, estudios, sueldo, cargo, fecha_nacimiento, dependencia, oficina, finca
    }
    //const sql = `UPDATE empleado SET primer_nombre ="${primer_nombre}", segundo_nombre = ${segundo_nombre}, primer_apellido = "${primer_apellido}",
       //         segundo_apelido = "${segundo_apelido}", estudios = ${estudios}, sueldo = "${sueldo}",
         //       cargo= "${cargo}", fecha_nacimiento = "${fecha_nacimiento}", dependencia = "${dependencia}", oficina = "${oficina}", finca = ${ ${finca} WHERE cedula = ${cedula}`;
    const sql = "UPDATE empleado SET ? WHERE cedula = ?"

    await connection.query(sql, [farm, cedula] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "empleado Actualizada"})
        }
    });
    
};


const deleteFarm = async (req, res) =>{
    const connection = await getConnection();
    const { cedula } = req.params;
    const sql = `DELETE FROM empleado WHERE cedula = ${cedula}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`empleado con ${cedula} eliminada`)
        }
    });
    
};

module.exports = {
    getFarm,
    getOneFarm,
    addFarm,
    updateFarm,
    deleteFarm

}
