import { getConnection } from "../database/database";

const getFarm = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM cargo';
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
    const sql = `SELECT * FROM cargo WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una cargo con el id ${id}`)
        }
    });
    
};

const addFarm = async (req, res) =>{
    const connection = await getConnection();
    const {nombre } = req.body;

    //const sql = `INSERT INTO fincas (nombre VALUES ( "${nombre}")`;
    const sql = "INSERT INTO cargo SET ?";
    const farm = {
        nombre
    }
    await connection.query(sql,farm, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "cargo creada"})
        }
    });
    
};


const updateFarm = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre } = req.body;

    const farm = {
        nombre
    }
    //const sql = `UPDATE cargo SET nombre ="${nombre}";
    const sql = "UPDATE cargo SET ? WHERE id = ?"

    await connection.query(sql, [farm, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "cargo Actualizada"})
        }
    });
    
};


const deleteFarm = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM cargo WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`cargo con ${id} eliminada`)
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
