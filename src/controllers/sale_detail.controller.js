import { getConnection } from "../database/database";

const getFarm = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM detalle_venta';
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
    const { numero_venta } = req.params;
    const sql = `SELECT * FROM detalle_venta WHERE numero_venta = ${numero_venta}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una detalle_venta con el numero_venta ${numero_venta}`)
        }
    });
    
};

const addFarm = async (req, res) =>{
    const connection = await getConnection();
    const {valor, cantidad, concepto, venta, producto } = req.body;

    //const sql = `INSERT INTO detalle_venta (valor, cantidad, concepto, venta, producto) VALUES ( "${valor}", ${cantidad}, "${concepto}", "${venta}", ${producto} )`;
    const sql = "INSERT INTO detalle_venta SET ?";
    const farm = {
        valor, cantidad, concepto, venta, producto
    }
    await connection.query(sql,farm, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "detalle_venta creada"})
        }
    });
    
};


const updateFarm = async (req, res) =>{
    const connection = await getConnection();
    const { numero_venta } = req.params;
    const {valor, cantidad, concepto, venta, producto } = req.body;

    const farm = {
        valor, cantidad, concepto, venta, producto
    }
    //const sql = `UPDATE detalle_venta SET valor ="${valor}", cantidad = ${cantidad}, concepto = "${concepto}",
       //         venta = "${venta}", producto = ${producto} WHERE numero_venta = ${numero_venta}`;
    const sql = "UPDATE detalle_venta SET ? WHERE numero_venta = ?"

    await connection.query(sql, [farm, numero_venta] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "detalle_venta Actualizada"})
        }
    });
    
};


const deleteFarm = async (req, res) =>{
    const connection = await getConnection();
    const { numero_venta } = req.params;
    const sql = `DELETE FROM detalle_venta WHERE numero_venta = ${numero_venta}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`detalle_venta con ${numero_venta} eliminada`)
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
