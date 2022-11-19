import { getConnection } from "../database/database";

const getDepartment = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM departamento';
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
const getOneDepartment = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM departamento WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una departamento con el id ${id}`)
        }
    });
    
};

const addDepartment = async (req, res) =>{
    const connection = await getConnection();
    const {nombre } = req.body;

    //const sql = `INSERT INTO fincas (nombre VALUES ( "${nombre}")`;
    const sql = "INSERT INTO departamento SET ?";
    const farm = {
        nombre
    }
    await connection.query(sql,farm, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "departamento creada"})
        }
    });
    
};


const updateDepartment = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre } = req.body;

    const farm = {
        nombre
    }
    //const sql = `UPDATE departamento SET nombre ="${nombre}";
    const sql = "UPDATE departamento SET ? WHERE id = ?"

    await connection.query(sql, [farm, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "departamento Actualizada"})
        }
    });
    
};


const deleteDepartment = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM departamento WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`departamento con ${id} eliminada`)
        }
    });
    
};

module.exports = {
    getDepartment,
    getOneDepartment,
    addDepartment,
    updateDepartment,
    deleteDepartment

}
