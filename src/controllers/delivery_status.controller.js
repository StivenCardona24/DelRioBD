import { getConnection } from "../database/database";

const getDelivery = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM estado_entrega';
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
const getOneDelivery = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM estado_entrega WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una estado_entrega con el id ${id}`)
        }
    });
    
};

const addDelivery = async (req, res) =>{
    const connection = await getConnection();
    const {nombre } = req.body;

    //const sql = `INSERT INTO estado_entrega (nombre) VALUES ( "${nombre}" )`;
    const sql = "INSERT INTO estado_entrega SET ?";
    const farm = {
        nombre
    }
    await connection.query(sql,farm, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "estado_entrega creada"})
        }
    });
    
};


const updateDelivery = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre } = req.body;

    const farm = {
        nombre
    }
    //const sql = `UPDATE estado_entrega SET nombre ="${nombre}"`;
    const sql = "UPDATE estado_entrega SET ? WHERE id = ?"

    await connection.query(sql, [farm, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "estado_entrega Actualizada"})
        }
    });
    
};


const deleteDelivery = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM estado_entrega WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`estado_entrega con ${id} eliminada`)
        }
    });
    
};

module.exports = {
    getDelivery,
    getOneDelivery,
    addDelivery,
    updateDelivery,
    deleteDelivery

}
