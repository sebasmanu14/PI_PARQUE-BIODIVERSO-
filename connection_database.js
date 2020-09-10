const {Client} = require ('pg');
const options = {
    host : 'localhost',
    user : 'postgres',
    database : 'parques_biodiversos',
    password : 'postgressql'
};

const database = new Client(options);

database.connect()
.then(Client => console.log('database connected'))
.catch(error => console.error(error));
 
const queryParque = database.query('select * from parque');
const queryUsuario = database.query('select * from usuario');
const queryDireccion = database.query('select * from direccion');
const queryRegistro = database.query('select * from registro');

Promise.all([queryParque, queryUsuario, queryDireccion, queryRegistro])
.then(results => {
    const queryParqueResult = results[0].rows;
    const queryUsuarioResult = results[1].rows;
    const queryDireccionResult = results[2].rows;
    const queryRegistroResult = results[3].rows;

    console.log(queryParqueResult);
    console.log(queryUsuarioResult);
    console.log(queryDireccionResult);
    console.log(queryRegistroResult);
}).catch(error => console.error(error));



