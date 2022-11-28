import { getConnection } from "../database/database";

const getVenta = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM venta';
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
const getOneVenta = async (req, res) =>{
    const connection = await getConnection();
    const { num_factura } = req.params;
    const sql = `SELECT * FROM venta WHERE num_factura = ${num_factura}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una venta con el numero de factura ${num_factura}`)
        }
    });
    
};

const addVenta = async (req, res) =>{
    const connection = await getConnection();
    const {tipoEntrega, valor, estado_entrega, cliente } = req.body;

    const sql = "INSERT INTO venta SET ?";
    const venta = {
        tipoEntrega, valor, estado_entrega, cliente
    }
    await connection.query(sql,venta, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "venta creada"})
        }
    });
    
};


const updateVenta = async (req, res) =>{
    const connection = await getConnection();
    const { num_factura } = req.params;
    const {tipoEntrega, valor, estado_entrega, cliente } = req.body;

    const venta = {
        tipoEntrega, valor, estado_entrega, cliente
    }
    //const sql = `UPDATE venta SET tipoEntrega ="${tipoEntrega}", valor = ${valor}, estado_entrega = "${estado_entrega}",
       //         cliente = "${cliente}"`;
    const sql = "UPDATE venta SET ? WHERE num_factura = ?"

    await connection.query(sql, [venta, num_factura] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "venta Actualizada"})
        }
    });
    
};


const deleteVenta = async (req, res) =>{
    const connection = await getConnection();
    const { num_factura } = req.params;
    const sql = `DELETE FROM venta WHERE num_factura = ${num_factura}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`venta con ${num_factura} fue eliminada`)
        }
    });
    
};

module.exports = {
    getVenta,
    getOneVenta,
    addVenta,
    updateVenta,
    deleteVenta

}
