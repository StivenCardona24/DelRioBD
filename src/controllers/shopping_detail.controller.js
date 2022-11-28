import { getConnection } from "../database/database";

const getShopping_detail = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM detalle_compra';
    await connection.query(sql, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json(results);
        }
        
    });
    
};
const getOneShopping_detail = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM detalle_compra WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una detalle de compra con el id ${id}`)
        }
    });
    
};

const addShopping_detail = async (req, res) =>{
    const connection = await getConnection();
    const {valor, cantidad, compra, producto } = req.body;

    const sql = "INSERT INTO detalle_compra SET ?";
    const shopping_detail = {
        valor, cantidad, compra, producto
    }
    await connection.query(sql,shopping_detail, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "detalle compra creada"})
        }
    });
    
};


const updateShopping_detail = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {valor, cantidad, compra, producto } = req.body;

    const shopping_detail = {
        valor, cantidad, compra, producto
    }
    const sql = "UPDATE detalle_compra SET ? WHERE id = ?"

    await connection.query(sql, [shopping_detail, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "detalle compra Actualizada"})
        }
    });
    
};


const deleteShopping_detail = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM detalle_compra WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`detalle_compra con ${id} eliminada`)
        }
    });
    
};

module.exports = {
    getShopping_detail,
    getOneShopping_detail,
    addShopping_detail,
    updateShopping_detail,
    deleteShopping_detail

}
