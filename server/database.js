const mysql = require("mysql2");

const connection = mysql.createConnection(
   {
      host: "localhost",
      user: "root",
      database: "mono"
   }
)

connection.connect(
   (err)=>{
     if(err) throw err;
     console.log("database connected successfully !");
     
   }
)


module.exports = connection;