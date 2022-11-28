import { getConnection } from "../database/database";

const getType_deliery = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM tipo_entrega';
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
const getOneType_deliery = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM tipo_entrega WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una tipo de entrega con el id ${id}`)
        }
    });
    
};

const addType_deliery = async (req, res) =>{
    const connection = await getConnection();
    const {nombre } = req.body;

    //const sql = `INSERT INTO tipo_entrega (nombre) VALUES ( "${nombre}")`;
    const sql = "INSERT INTO tipo_entrega SET ?";
    const type_deliery = {
        nombre
    }
    await connection.query(sql,type_deliery, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "tipo de entrega creada"})
        }
    });
    
};


const updateType_deliery = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre } = req.body;

    const type_deliery = {
        nombre
    }
    //const sql = `UPDATE tipo_entrega SET nombre ="${nombre}"`;
    const sql = "UPDATE tipo_entrega SET ? WHERE id = ?"

    await connection.query(sql, [type_deliery, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "tipo de entrega Actualizada"})
        }
    });
    
};


const deleteType_deliery = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM tipo_entrega WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`tipo de entrega con ${id} eliminada`)
        }
    });
    
};

module.exports = {
    getType_deliery,
    getOneType_deliery,
    addType_deliery,
    updateType_deliery,
    deleteType_deliery

}
