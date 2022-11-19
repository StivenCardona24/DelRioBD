import { getConnection } from "../database/database";

const getProductProvide = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM productos_proveedor';
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
const getOneProductProvide = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM productos_proveedor WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay productos del proveedor con el id ${id}`)
        }
    });
    
};

const addProductProvide= async (req, res) =>{
    const connection = await getConnection();
    const {nombre, descripcion, precio, proveedor } = req.body;

    //const sql = `INSERT INTO detalle_producto (producto, cliente) VALUES ( "${producto}", ${cliente} )`;
    const sql = "INSERT INTO productos_proveedor  SET ?";
    const product = {
        nombre, descripcion, precio, proveedor
    }
    await connection.query(sql,product, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "Producto del proveedor creado"})
        }
    });
    
};


const updateProductProvide = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre, descripcion, precio, proveedor } = req.body;

    const product = {
        nombre, descripcion, precio, proveedor 
    }
    //const sql = `UPDATE detalle_producto SET producto ="${producto}" WHERE id = ${id}, cliente = ${cliente} WHERE id = ${id}`;
    const sql = "UPDATE productos_proveedor  SET ? WHERE id = ?"

    await connection.query(sql, [product, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "Producto del proveedor Actualizado"})
        }
    });
    
};


const deleteProductProvide = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM productos_proveedor  WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`Producto del proveedor con ${id} eliminado`)
        }
    });
    
};

module.exports = {
    getProductProvide,
    getOneProductProvide,
    addProductProvide,
    updateProductProvide,
    deleteProductProvide

}
