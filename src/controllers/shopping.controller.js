import { getConnection } from "../database/database";

const getFarm = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM compra';
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
    const { num_compra } = req.params;
    const sql = `SELECT * FROM compra WHERE num_compra = ${num_compra}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una compra con el num_compra ${num_compra}`)
        }
    });
    
};

const addFarm = async (req, res) =>{
    const connection = await getConnection();
    const {estado_compra } = req.body;

    //const sql = `INSERT INTO compra (estado_compra) VALUES ( "${estado_compra}" )`;
    const sql = "INSERT INTO compra SET ?";
    const farm = {
        estado_compra
    }
    await connection.query(sql,farm, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "compra creada"})
        }
    });
    
};


const updateFarm = async (req, res) =>{
    const connection = await getConnection();
    const { num_compra } = req.params;
    const {estado_compra } = req.body;

    const farm = {
        estado_compra
    }
    //const sql = `UPDATE compra SET estado_compra ="${estado_compra}" WHERE num_compra = ${num_compra}`;
    const sql = "UPDATE compra SET ? WHERE num_compra = ?"

    await connection.query(sql, [farm, num_compra] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "compra Actualizada"})
        }
    });
    
};


const deleteFarm = async (req, res) =>{
    const connection = await getConnection();
    const { num_compra } = req.params;
    const sql = `DELETE FROM compra WHERE num_compra = ${num_compra}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`compra con ${num_compra} eliminada`)
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
