// const express = require("express");
// const app = express();
// const mysql = require("mysql");
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'Siveth',
// });


// // Inicio de sesión con GET
// app.get('/Login', (req, res) => {
//   const { correo, contrasenia } = req.query;

//   const usuarioEncontrado = usuarios.find(user => user.correo === correo && user.contrasenia === contrasenia);

//   if (usuarioEncontrado) {
//     // Usuario autenticado
//     res.json({ status: 'success', message: 'Inicio de sesión exitoso' });
//   } else {
//     // Credenciales incorrectas
//     res.status(401).json({ status: 'error', message: 'Credenciales incorrectas' });
//   }
// });

// app.listen(3001, () => {
//   console.log("Corriendo en el puerto 3001");
// });
