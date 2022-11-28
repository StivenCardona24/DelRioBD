import { getConnection } from "../database/database";

const getEmployee = async (req, res) =>{
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
const getOneEmployee = async (req, res) =>{
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

const addEmployee = async (req, res) =>{
    const connection = await getConnection();
    const {cedula, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, estudios, sueldo, cargo, fecha_nacimiento, dependencia, oficina } = req.body;

    //const sql = `INSERT INTO empleado (primer_nombre, segundo_nombre, primer_apellido, segundo_apelido, estudios, sueldo, cargo, fecha_nacimiento, dependencia, oficina, finca) VALUES ( "${primer_nombre}", ${segundo_nombre}, "${primer_apellido}", "${segundo_apelido}", "${estudios}", "${sueldo}", "${cargo}", "${fecha_nacimiento}", "${dependencia}", "${oficina}", "${finca}" )`;
    const sql = "INSERT INTO empleado SET ?";
    const employee = {
        cedula, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, estudios, sueldo, cargo, fecha_nacimiento, dependencia, oficina
    }
    await connection.query(sql,employee, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "empleado creada"})
        }
    });
    
};


const updateEmployee = async (req, res) =>{
    const connection = await getConnection();
    const { cedula } = req.params;
    const {primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, estudios, sueldo, cargo, fecha_nacimiento, dependencia, oficina } = req.body;

    const employee = {
        primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, estudios, sueldo, cargo, fecha_nacimiento, dependencia, oficina
    }
    const sql = "UPDATE empleado SET ? WHERE cedula = ?"

    await connection.query(sql, [employee, cedula] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "empleado Actualizada"})
        }
    });
    
};


const deleteEmployee = async (req, res) =>{
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
    getEmployee,
    getOneEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee

}
