import { getConnection } from "../database/database";

const getProduct = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM producto';
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
const getOneProduct = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM producto WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay un producto con el id ${id}`)
        }
    });
    
};

const addProduct = async (req, res) =>{
    const connection = await getConnection();
    const {precio, cantidad, descripcion, tipo, finca, nombre } = req.body;

    const sql = "INSERT INTO producto SET ?";
    const product = {
        precio, cantidad, descripcion, tipo, finca, nombre 
    }
    await connection.query(sql,product, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "producto creado"})
        }
    });
    
};


const updateProduct = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {precio, cantidad, descripcion, tipo, finca, nombre } = req.body;

    const product = {
        precio, cantidad, descripcion, tipo, finca, nombre
    }
    const sql = "UPDATE producto SET ? WHERE id = ?"

    await connection.query(sql, [product, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "Producto Actualizado"})
        }
    });
    
};


const deleteProduct = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM producto WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(` El producto con ${id} fue eliminado`)
        }
    });
    
};

module.exports = {
    getProduct,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct

}
