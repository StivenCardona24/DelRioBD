import { getConnection } from "../database/database";

const getValidator = async (req, res) => {
  const connection = await getConnection();
  const { correo, contrasenia } = req.body;
  let sql = `SELECT * FROM  empleado WHERE correo = "${correo}" and contrasenia = "${contrasenia}"  `;
  let usuario = false;
  await connection.query(sql, async (error, result) => {
    if (error) {
      return  res.status(500).send(error);
    }
    if (result.length > 0) {
      usuario = true;
      return  res.status(200).json(result[0]);
    }
    else{
        sql = `SELECT * FROM  cliente WHERE correo = "${correo}" and contrasenia = "${contrasenia}"  `;
         await connection.query(sql, async (error, result) => {
            if (error) {
              return  res.status(500).send(error);
            }
            if (result.length > 0) {
              usuario = true;
              return  res.status(200).json(result[0]);
            } else {
              return  res.send(usuario);
            }
          });
    }
  });
};

    
  



module.exports = {
  getValidator,
};
