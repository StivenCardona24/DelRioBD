import { getConnection } from "../database/database";


const getValidator = async (req, res) => {

    const connection = await getConnection();

    const { correo, contrasenia } = req.body;    
    
    let usuario;


    let sql = `SELECT * FROM  empleado WHERE correo = "${correo}" and contrasenia = "${contrasenia}"  `;

    await connection.query(sql, (error, result) => {
        if (error) {
            res.status(500);
            res.send(error);
        };
        if (result.length > 0) {
            usuario = result
        }

    });

    if (usuario.length > 0) {

        res.status(200).send(usuario);

    }
    sql = `SELECT * FROM  cliente WHERE correo = "${correo}" and contrasenia = "${contrasenia}"  `;


    await connection.query(sql, (error, result) => {
        if (error) {
            res.status(500);
            res.send(error);
        };
        if (result.length > 0) {
            usuario = result
        }



    });
    

        res.status(200).send(usuario);

}

module.exports = {
    getValidator

}



