import { getConnection } from "../database/database";

const getPosition = async (req, res) =>{
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
const getOnePosition = async (req, res) =>{
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
            res.send(`No hay un cargo con el id ${id}`)
        }
    });
    
};

const addPosition= async (req, res) =>{
    const connection = await getConnection();
    const {nombre } = req.body;

    //const sql = `INSERT INTO fincas (nombre VALUES ( "${nombre}")`;
    const sql = "INSERT INTO cargo SET ?";
    const position = {
        nombre
    }
    await connection.query(sql,position, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "cargo creado"})
        }
    });
    
};


const updatePosition = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre } = req.body;

    const position = {
        nombre  
    }
    //const sql = `UPDATE cargo SET nombre ="${nombre}";
    const sql = "UPDATE cargo SET ? WHERE id = ?"

    await connection.query(sql, [position, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "cargo Actualizado"})
        }
    });
    
};


const deletePosition = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM cargo WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`cargo con id: ${id} eliminado`)
        }
    });
    
};

module.exports = {
    getPosition,
    getOnePosition,
    addPosition,
    updatePosition,
    deletePosition

}
