import { getConnection } from "../database/database";

const getFarm = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM ciudades';
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
    const sql = `SELECT * FROM ciudades WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay unas ciudades con el id ${id}`)
        }
    });
    
};

const addFarm = async (req, res) =>{
    const connection = await getConnection();
    const {nombre, ciudad, direccion, celular, tipo_finca, cuenta, oficina } = req.body;

    //const sql = `INSERT INTO ciudades (nombre, departamento) VALUES ( "${nombre}", ${departamento})`;
    const sql = "INSERT INTO ciudades SET ?";
    const farm = {
        nombre, departamento
    }
    await connection.query(sql,farm, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "Ciudad creada"})
        }
    });
    
};


const updateFarm = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre, departamento } = req.body;

    const farm = {
        nombre, departamento
    }
    //const sql = `UPDATE ciudades SET nombre ="${nombre}", departamento = ${departamento}  WHERE id = ${id}, 
    const sql = "UPDATE ciudades SET ? WHERE id = ?"

    await connection.query(sql, [farm, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "Ciudad Actualizada"})
        }
    });
    
};


const deleteFarm = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM ciudades WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`Ciudad con ${id} eliminada`)
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
