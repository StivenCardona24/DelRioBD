import { getConnection } from "../database/database";

const getFarm = async (req, res) =>{
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
const getOneFarm = async (req, res) =>{
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
            res.send(`No hay una cliente con el cedula ${cedula}`)
        }
    });
    
};

const addFarm = async (req, res) =>{
    const connection = await getConnection();
    const {nombre, celular, cantidad_compras, estado } = req.body;

    //const sql = `INSERT INTO cliente (nombre, celular, cantidad_compras, estado VALUES ( "${nombre}", ${estado}, "${cantidad_compras}", "${estado}" )`;
    const sql = "INSERT INTO cliente SET ?";
    const farm = {
        nombre, celular, cantidad_compras, estado
    }
    await connection.query(sql,farm, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "cliente creada"})
        }
    });
    
};


const updateFarm = async (req, res) =>{
    const connection = await getConnection();
    const { cedula } = req.params;
    const {nombre, celular, cantidad_compras, estado } = req.body;

    const farm = {
        nombre, celular, cantidad_compras, estado
    }
    //const sql = `UPDATE cliente SET nombre ="${nombre}", celular = ${celular}, cantidad_compras = "${cantidad_compras}",
       //         estado = "${estado}", WHERE cedula = ${cedula}`;
    const sql = "UPDATE cliente SET ? WHERE cedula = ?"

    await connection.query(sql, [farm, cedula] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "cliente Actualizada"})
        }
    });
    
};


const deleteFarm = async (req, res) =>{
    const connection = await getConnection();
    const { cedula } = req.params;
    const sql = `DELETE FROM cliente WHERE cedula = ${cedula}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`cliente con ${cedula} eliminada`)
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
