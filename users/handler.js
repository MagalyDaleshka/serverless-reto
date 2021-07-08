'use strict';

const uuid = require('uuid');
const connection = require('./connection');

module.exports.createUser = (event, context, callback) => {
  const data = JSON.parse(event.body);
  connection.query("Select * from users where email ='"+data.email+"' and statuses_id = 1 ", (err, result,  fields) => {
    if(error){
      callback({
        statusCode: 500,
        body: JSON.stringify(error)
      })
    }
    if(result.length === 0 ){
      callback(null, {
        statusCode:200,
        body:JSON.stringify({
          res:'El usuario ya esta registrado, existe en la base de datos.'
        })
      })
    }else{
      const query = 'INSERT INTO users (name, lastname, email, password, statuses_id) VALUES (?,?,?,?,?,?,1)';
      connection.query(query, [data.nombre, data.apellido, data.email, data.contrasena], (error, result)=>{
        if(error){
          callback({
            statusCode: 500,
            body: JSON.stringify(error)
          })
        }else{
          callback(null, {
            statusCode:200,
            body:JSON.stringify({
              res:'El usuario fue registrado con exito.'
            })
          })
        }
      });
    }
  });
};
module.exports.updateUser = (event, context, callback) => {
  const data = JSON.parse(event.body);
  const query = 'UPDATE `users` SET name = "'+data.nombre+'", lastname ="'+data.apellido+'", email = "'+data.email+'" where `id`= '+event.pathParameters.id;
  connection.query(query, (error, result)=>{
    if(error){
      callback({
        statusCode: 500,
        body: JSON.stringify(error)
      })
    }else{
      callback(null, {
        statusCode:200,
        body:JSON.stringify({
          res:'Los datos del usuario fueron editados con exito.'
        })
      })
    }
  });
};


module.exports.getUsers = (event, context, callback) => {
  const query = 'SELECT * FROM users WHERE statuses_id = 1';
  connection.query(query, (error, result)=>{
    if(error){
      callback({
        statusCode: 500,
        body: JSON.stringify(error)
      })
    }else{
      callback(null, {
        statusCode:200,
        body:JSON.stringify({
          res:result
        })
      })
    }
  });
};

module.exports.getUserId = (event, context, callback) => {
  const query = 'SELECT * FROM users WHERE id = '+event.pathParameters.id;
  connection.query(query, (error, result)=>{
    if(error){
      callback({
        statusCode: 500,
        body: JSON.stringify(error)
      })
    }else{
      callback(null, {
        statusCode:200,
        body:JSON.stringify({
          res:result
        })
      })
    }
  });
};

module.exports.deleteUser = (event, context, callback) => {
  const data = JSON.parse(event.body);
  const query = 'UPDATE `users` SET statuses_id = 2 WHERE `id`= '+event.pathParameters.id;
  connection.query(query, (error, result)=>{
    if(error){
      callback({
        statusCode: 500,
        body: JSON.stringify(error)
      })
    }else{
      callback(null, {
        statusCode:200,
        body:JSON.stringify({
          res:'Los datos del usuario fueron editados con exito.'
        })
      })
    }
  });
}