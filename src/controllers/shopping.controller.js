import { getConnection } from "../database/database";

const getShooping = async (req, res) =>{
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
const getOneShooping = async (req, res) =>{
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
            res.send(`No hay una compra con el numero de  compra ${num_compra}`)
        }
    });
    
};

const addShooping = async (req, res) =>{
    const connection = await getConnection();
    const {total, id_finca } = req.body;

    const sql = "INSERT INTO compra SET ?";
    const Shooping = {
        total, id_finca
    }
    await connection.query(sql,Shooping, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "compra creada"})
        }
    });
    
};


const updateShooping = async (req, res) =>{
    const connection = await getConnection();
    const { num_compra } = req.params;
    const {total, id_finca } = req.body;

    const Shooping = {
        total, id_finca
    }
    const sql = "UPDATE compra SET ? WHERE num_compra = ?"

    await connection.query(sql, [Shooping, num_compra] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "compra Actualizada"})
        }
    });
    
};


const deleteShooping = async (req, res) =>{
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
    getShooping,
    getOneShooping,
    addShooping,
    updateShooping,
    deleteShooping

}
