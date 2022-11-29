import { getConnection } from "../database/database";

const getDependence = async (req, res) =>{
    const connection = await getConnection();
    const sql = 'SELECT d.nombre, COUNT(e.cedula) as empleados FROM empleado e INNER JOIN dependencia d on e.dependencia = d.id GROUP BY d.nombre;  ';
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
const getOneDependence = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM dependencia WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una dependencia con el id ${id}`)
        }
    });
    
};

const addDependence = async (req, res) =>{
    const connection = await getConnection();
    const {nombre } = req.body;

    //const sql = `INSERT INTO dependencia (nombre) VALUES ( "${nombre}")`;
    const sql = "INSERT INTO dependencia SET ?";
    const Dependence  = {
        nombre
    }
    await connection.query(sql,Dependence, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "dependencia creada"})
        }
    });
    
};


const updateDependence  = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre } = req.body;

    const Dependence  = {
        nombre
    }
    //const sql = `UPDATE dependencia SET nombre ="${nombre}"`;
    const sql = "UPDATE dependencia SET ? WHERE id = ?"

    await connection.query(sql, [Dependence, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "dependencia Actualizada"})
        }
    });
    
};


const deleteDependence = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM dependencia WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`dependencia con ${id} eliminada`)
        }
    });
    
};

module.exports = {
    getDependence,
    getOneDependence,
    addDependence,
    updateDependence,
    deleteDependence
}
