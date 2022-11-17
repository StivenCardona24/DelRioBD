import { getConnection } from "../database/database";

const getFarm = async (req, res) =>{
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
const getOneFarm = async (req, res) =>{
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
            res.send(`No hay una venta con el num_factura ${num_factura}`)
        }
    });
    
};

const addFarm = async (req, res) =>{
    const connection = await getConnection();
    const {tipoEntrega, valor, estado_entrega, cliente } = req.body;

    //const sql = `INSERT INTO venta (tipoEntrega, valor, estado_entrega, cliente) VALUES ( "${tipoEntrega}", ${valor}, "${estado_entrega}", "${cliente}" )`;
    const sql = "INSERT INTO venta SET ?";
    const farm = {
        tipoEntrega, valor, estado_entrega, cliente
    }
    await connection.query(sql,farm, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "venta creada"})
        }
    });
    
};


const updateFarm = async (req, res) =>{
    const connection = await getConnection();
    const { num_factura } = req.params;
    const {tipoEntrega, valor, estado_entrega, cliente } = req.body;

    const farm = {
        tipoEntrega, valor, estado_entrega, cliente
    }
    //const sql = `UPDATE venta SET tipoEntrega ="${tipoEntrega}", valor = ${valor}, estado_entrega = "${estado_entrega}",
       //         cliente = "${cliente}"`;
    const sql = "UPDATE venta SET ? WHERE num_factura = ?"

    await connection.query(sql, [farm, num_factura] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "venta Actualizada"})
        }
    });
    
};


const deleteFarm = async (req, res) =>{
    const connection = await getConnection();
    const { num_factura } = req.params;
    const sql = `DELETE FROM venta WHERE num_factura = ${num_factura}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`venta con ${num_factura} eliminada`)
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
