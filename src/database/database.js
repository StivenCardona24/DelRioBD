import mysql from "mysql";
import config from "./../config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: "admin",
    password: config.password
});

connection.connect((err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("Database connect")
})

const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
}