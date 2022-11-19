import { getConnection } from "../database/database";

const getOfice = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM oficina';
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
const getOneOfice = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM oficina WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una oficina con el id ${id}`)
        }
    });
    
};

const addOfice = async (req, res) =>{
    const connection = await getConnection();
    const {nombre, direccion } = req.body;

    //const sql = `INSERT INTO oficina (direccion ( "${direccion}" )`;
    const sql = "INSERT INTO oficina SET ?";
    const ofice = {
        nombre, direccion
    }
    await connection.query(sql,ofice, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "oficina creada"})
        }
    });
    
};


const updateOfice = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre, direccion } = req.body;

    const ofice = {
        nombre, direccion
    }
    //const sql = `UPDATE oficina SET direccion ="${direccion}"`;
    const sql = "UPDATE oficina SET ? WHERE id = ?"

    await connection.query(sql, [ofice, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "oficina Actualizada"})
        }
    });
    
};


const deleteOfice = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM oficina WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`oficina con ${id} eliminada`)
        }
    });
    
};

module.exports = {
    getOfice,
    getOneOfice,
    addOfice,
    updateOfice,
    deleteOfice

}
