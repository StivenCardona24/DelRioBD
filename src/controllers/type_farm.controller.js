import { getConnection } from "../database/database";

const getType_farm = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM tipo_finca';
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
const getOneType_farm = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM tipo_finca WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una tipo_finca con el id ${id}`)
        }
    });
    
};

const addType_farm = async (req, res) =>{
    const connection = await getConnection();
    const {nombre } = req.body;

    //const sql = `INSERT INTO tipo_finca (nombre) VALUES ( "${nombre}" )`;
    const sql = "INSERT INTO tipo_finca SET ?";
    const type_farm = {
        nombre
    }
    await connection.query(sql,type_farm, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "tipo_finca creada"})
        }
    });
    
};


const updateType_farm = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre } = req.body;

    const type_farm = {
        nombre
    }
    const sql = "UPDATE tipo_finca SET ? WHERE id = ?"

    await connection.query(sql, [type_farm, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "tipo de finca Actualizada"})
        }
    });
    
};


const deleteType_farm = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM tipo_finca WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`tipo de finca con ${id} eliminada`)
        }
    });
    
};

module.exports = {
    getType_farm,
    getOneType_farm,
    addType_farm,
    updateType_farm,
    deleteType_farm

}
