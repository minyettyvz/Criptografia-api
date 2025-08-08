// Importamos las librerías necesarias
const express = require('express'); // Este es el framework para crear el servidor web
const path = require('path');       // Este es el modulo para trabajar con rutas de archivos

// Aqui he creado una instancia 
const app = express();

// Aqui indicamos en puerto donde va a correr
const PORT = 3000;


// Esto permite que el servidor entienda datos que vienen desde formularios HTML
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servimos archivos estáticos (como el formulario HTML) desde la carpeta "public"
app.use(express.static('public'));

// Aquí guardaremos los datos temporalmente en cache
const usuarios = [];


// RUTAS PARA USUARIOS
// Esta ruta devuelve todos los usuarios registrados (GET)
app.get('/usuarios', (req, res) => {
  res.json(usuarios); // Respondemos con el array completo de usuarios
});

// Esta ruta recibe un nuevo usuario desde el formulario o desde una petición POST
app.post('/usuarios', (req, res) => {
  const usuario = req.body;        // Aqui se saca los datos enviados
  usuarios.push(usuario);          // Aqui agregamos un usuario al arreglo
  res.status(201).json({           // Respuesta de usuario creado
    mensaje: 'Usuario creado',
    usuario
  });
});


// INICIAR EL SERVIDOR
// Inicia el servidor y muestra en consola que todo está funcionando
app.listen(PORT, () => {
  console.log(`Servidor API corriendo en http://localhost:${PORT}`);
});
