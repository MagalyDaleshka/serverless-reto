const mysql = require('mysql');
const AWS = require('aws-sdk'); 

const configBD ={
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'backend_reto',
  debug: true
};
function initializeConnection(config){
  function addDisconnectHandler(connection){
    connection.on("error", function(error){
      if(error instanceof Error){
        if(error.code === "PROTOCOL_CONNECTION_LOST"){
          console.error(error.stack);
          console.log("Se perdio la conexión. Reconecte.");
          initializeConnection(connection.config);
        }else if(error.fatal){
          throw error;
        }
      }
    });
  }
  const connection = mysql.createConnection(config);
  addDisconnectHandler(connection);
  connection.connect();
  return connection;
}

const connection = initializeConnection(configBD);
module.exports = connection;
