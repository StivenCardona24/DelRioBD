import { getConnection } from "../database/database";

const getFarm = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM detalle_producto';
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
    const sql = `SELECT * FROM detalle_producto WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una detalle_producto con el id ${id}`)
        }
    });
    
};

const addFarm = async (req, res) =>{
    const connection = await getConnection();
    const {producto, cliente } = req.body;

    //const sql = `INSERT INTO detalle_producto (producto, cliente) VALUES ( "${producto}", ${cliente} )`;
    const sql = "INSERT INTO detalle_producto SET ?";
    const farm = {
        producto, cliente
    }
    await connection.query(sql,farm, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "detalle_producto creada"})
        }
    });
    
};


const updateFarm = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {producto, cliente } = req.body;

    const farm = {
        producto, cliente
    }
    //const sql = `UPDATE detalle_producto SET producto ="${producto}" WHERE id = ${id}, cliente = ${cliente} WHERE id = ${id}`;
    const sql = "UPDATE detalle_producto SET ? WHERE id = ?"

    await connection.query(sql, [farm, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "detalle_producto Actualizada"})
        }
    });
    
};


const deleteFarm = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM detalle_producto WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`detalle_producto con ${id} eliminada`)
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
