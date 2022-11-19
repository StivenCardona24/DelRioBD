import { getConnection } from "../database/database";

const getClient = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT * FROM cliente';
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
const getOneClient = async (req, res) =>{
    const connection = await getConnection();
    const { cedula } = req.params;
    const sql = `SELECT * FROM cliente WHERE cedula = ${cedula}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una cliente con la cedula ${cedula}`)
        }
    });
    
};

const addClient = async (req, res) =>{
    const connection = await getConnection();
    const {cedula, nombre, celular, correo, cantidad_compras, estado } = req.body;

    const sql = "INSERT INTO cliente SET ?";
    const client = {
        cedula, nombre, celular, correo, cantidad_compras, estado
    }
    await connection.query(sql,client, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "cliente creado"})
        }
    });
    
};


const updateClient = async (req, res) =>{
    const connection = await getConnection();
    const { cedula } = req.params;
    const {nombre, celular, cantidad_compras, correo, estado } = req.body;

    const client = {
        nombre, celular, cantidad_compras, correo, estado
    }
   
    const sql = "UPDATE cliente SET ? WHERE cedula = ?"

    await connection.query(sql, [client, cedula] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "cliente Actualizado"})
        }
    });
    
};


const deleteClient = async (req, res) =>{
    const connection = await getConnection();
    const { cedula } = req.params;
    const sql = `DELETE FROM cliente WHERE cedula = ${cedula}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`cliente con ${cedula} eliminado`)
        }
    });
    
};

module.exports = {
    getClient,
    getOneClient,
    addClient,
    updateClient,
    deleteClient

}
