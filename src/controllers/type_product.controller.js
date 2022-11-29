import { getConnection } from "../database/database";

const getType_product = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM tipo_producto';
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
const getOneType_product = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM tipo_producto WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una tipo de producto con el id ${id}`)
        }
    });
    
};

const addType_product = async (req, res) =>{
    const connection = await getConnection();
    const {nombre } = req.body;

    //const sql = `INSERT INTO tipo_finca (nombre) VALUES ( "${nombre}" )`;
    const sql = "INSERT INTO tipo_producto SET ?";
    const type_product = {
        nombre
    }
    await connection.query(sql,type_product, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "tipo de producto creada"})
        }
    });
    
};


const updateType_product = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre } = req.body;

    const type_product = {
        nombre
    }
    const sql = "UPDATE tipo_producto SET ? WHERE id = ?"

    await connection.query(sql, [type_product, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "tipo de tipo de producto Actualizada"})
        }
    });
    
};


const deleteType_product = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM tipo_producto WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`tipo de producto con ${id} eliminada`)
        }
    });
    
};

module.exports = {
    getType_product,
    getOneType_product,
    addType_product,
    updateType_product,
    deleteType_product

}
