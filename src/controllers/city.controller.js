import { getConnection } from "../database/database";

const getCity = async (req, res) =>{
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
const getOneCity = async (req, res) =>{
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

const addCity = async (req, res) =>{
    const connection = await getConnection();
    const {nombre, departamento} = req.body;
    const sql = "INSERT INTO ciudades SET ?";
    const city = {
        nombre, departamento
    }
    await connection.query(sql,city, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "Ciudad creada"})
        }
    });
    
};


const updateCity = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre, departamento } = req.body;

    const city = {
        nombre, departamento
    }
    //const sql = `UPDATE ciudades SET nombre ="${nombre}", departamento = ${departamento}  WHERE id = ${id}, 
    const sql = "UPDATE ciudades SET ? WHERE id = ?"

    await connection.query(sql, [city, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "Ciudad Actualizada"})
        }
    });
    
};


const deleteCity = async (req, res) =>{
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
    getCity,
    getOneCity,
    addCity,
    updateCity,
    deleteCity

}
