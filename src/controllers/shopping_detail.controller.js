import { getConnection } from "../database/database";

const getFarm = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM detalle_compra';
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
            res.send(`No hay una detalle_compra con el id ${id}`)
        }
    });
    
};

const addFarm = async (req, res) =>{
    const connection = await getConnection();
    const {detalle, valor, cantidad, compra, proveedor } = req.body;

    //const sql = `INSERT INTO detalle_compra (detalle, valor, cantidad, compra, proveedor) VALUES ( "${detalle}", ${valor}, "${cantidad}", "${compra}", ${proveedor} )`;
    const sql = "INSERT INTO detalle_compra SET ?";
    const farm = {
        detalle, valor, cantidad, compra, proveedor
    }
    await connection.query(sql,farm, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "detalle_compra creada"})
        }
    });
    
};


const updateFarm = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {detalle, valor, cantidad, compra, proveedor } = req.body;

    const farm = {
        detalle, valor, cantidad, compra, proveedor
    }
    //const sql = `UPDATE detalle_compra SET detalle ="${detalle}", valor = ${valor}, cantidad = "${cantidad}",
       //         compra = "${compra}", proveedor = ${proveedor} WHERE id = ${id}`;
    const sql = "UPDATE detalle_compra SET ? WHERE id = ?"

    await connection.query(sql, [farm, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "detalle_compra Actualizada"})
        }
    });
    
};


const deleteFarm = async (req, res) =>{
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
    getFarm,
    getOneFarm,
    addFarm,
    updateFarm,
    deleteFarm

}
