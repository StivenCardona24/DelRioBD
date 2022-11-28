import { getConnection } from "../database/database";

const getFarm = async (req, res) =>{
    const connection = await getConnection();
    let sql;
    let filters = "";
    if(req.query.departamento){
        const departamento = req.query.departamento;
            filters += `where d.id = ${departamento} `
    }

    if(req.query.ciudad){
        const ciudad = req.query.ciudad;
        if(filters.length > 0){
            filters += `and c.id = ${ciudad} `
        }
        else{
            filters += `where c.id = ${ciudad} `
        }
        

    }
    
    if(req.query.tipo_finca){
        const tipoFinca = req.query.tipo_finca;
        if(filters.length > 0){
            filters += `and tf.id = ${tipoFinca} `
        }
        else{
            filters += `where tf.id = ${tipoFinca} `
        }
    }

    sql = `SELECT f.* , c.nombre as Ciudad , d.nombre as Departamento, tf.nombre as tipo, o.nombre as Oficina  FROM  fincas f INNER JOIN ciudades c ON f.ciudad = c.id INNER JOIN  departamento d ON c.departamento = d.id INNER JOIN tipo_finca tf ON f.tipo_finca = tf.id INNER JOIN oficina o ON f.oficina = o.id ${filters} `;
    console.log(sql)    
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
    const sql = `SELECT * FROM fincas WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        };
        if(result.length > 0){
            res.status(200).json(result);
        }
        else{
            res.send(`No hay una finca con el id ${id}`)
        }
    });
    
};

const addFarm = async (req, res) =>{
    const connection = await getConnection();
    const {nombre, ciudad, direccion, celular, tipo_finca, cuenta, oficina } = req.body;

    //const sql = `INSERT INTO fincas (nombre, ciudad, direccion, celular, tipo_finca, cuenta, oficina) VALUES ( "${nombre}", ${ciudad}, "${direccion}", "${celular}", ${tipo_finca}, "${cuenta}", ${oficina} )`;
    const sql = "INSERT INTO fincas SET ?" ;  
    const farm = {
        nombre, ciudad, direccion, celular, tipo_finca, cuenta, oficina
    }
    await connection.query(sql,farm, (error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "Finca creada"})
        }
    });
    
};


const updateFarm = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const {nombre, ciudad, direccion, celular, tipo_finca, cuenta, oficina } = req.body;

    const farm = {
        nombre, ciudad, direccion, celular, tipo_finca, cuenta, oficina
    }
    //const sql = `UPDATE fincas SET nombre ="${nombre}", ciudad = ${ciudad}, direccion = "${direccion}",
       //         celular = "${celular}", tipo_finca = ${tipo_finca}, cuenta = "${cuenta}",
         //       oficina = ${oficina} WHERE id = ${id}`;
    const sql = "UPDATE fincas SET ? WHERE id = ?"

    await connection.query(sql, [farm, id] ,(error, results)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.status(200).json({message: "Finca Actualizada"})
        }
    });
    
};


const deleteFarm = async (req, res) =>{
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `DELETE FROM fincas WHERE id = ${id}`;
    await connection.query(sql, (error, result)=>{
        if(error){
            res.status(500);
            res.send(error);
        }
        else{
            res.send(`Finca con ${id} eliminada`)
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



