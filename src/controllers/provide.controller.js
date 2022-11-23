import { getConnection } from "../database/database";

const getProvide = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM proveedor';
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
const getOneProvide = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM proveedor WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay un proveedor con el id ${id}`)
        }
    });
    
};

const addProvide = async (req, res) =>{
    const connection = await getConnection();
    const {nombre } = req.body;

    //const sql = `INSERT INTO proveedor (nombre, producto) VALUES ( "${nombre}", ${producto})`;
    const sql = "INSERT INTO proveedor SET ?";
    const provide = {
        nombre
    }
    await connection.query(sql,provide, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "proveedor creado"})
        }
    });
    
};


const updateProvide = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre } = req.body;

    const provide = {
        nombre
    }
    //const sql = `UPDATE proveedor SET nombre ="${nombre}", ciudad = ${producto}`;
    const sql = "UPDATE proveedor SET ? WHERE id = ?"

    await connection.query(sql, [provide, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "proveedor Actualizado"})
        }
    });
    
};


const deleteProvide = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM proveedor WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`proveedor con ${id} eliminado`)
        }
    });
    
};

module.exports = {
    getProvide,
    getOneProvide,
    addProvide,
    updateProvide,
    deleteProvide

}
