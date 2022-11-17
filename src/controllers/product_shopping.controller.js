import { getConnection } from "../database/database";

const getFarm = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM producto_compra';
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
    const { id } = req.params;
    const sql = `SELECT * FROM producto_compra WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una producto_compra con el id ${id}`)
        }
    });
    
};

const addFarm = async (req, res) =>{
    const connection = await getConnection();
    const {nombre, descripcion, precio } = req.body;

    //const sql = `INSERT INTO producto_compra (nombre, descripcion, precio) VALUES ( "${nombre}", ${}, "${descripcion}", "${precio}" )`;
    const sql = "INSERT INTO producto_compra SET ?";
    const farm = {
        nombre, descripcion, precio
    }
    await connection.query(sql,farm, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "producto_compra creada"})
        }
    });
    
};


const updateFarm = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre, descripcion, precio } = req.body;

    const farm = {
        nombre, descripcion, precio
    }
    //const sql = `UPDATE producto_compra SET nombre ="${nombre}", descripcion = "${descripcion}",
       //         precio = "${precio}"`;
    const sql = "UPDATE producto_compra SET ? WHERE id = ?"

    await connection.query(sql, [farm, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "producto_compra Actualizada"})
        }
    });
    
};


const deleteFarm = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM producto_compra WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`producto_compra con ${id} eliminada`)
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
