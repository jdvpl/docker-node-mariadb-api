const express = require('express');
const cors = require('cors');
const app = express();
// para que pueda usar json
const pool = require('./db/database');

const port = process.env.PORT || 4000;
require('dotenv').config()
app.use(cors({
  origin: true
}));

app.use(express.json())

app.get("/products", async (req, res) => {
  try {
    // obtener conexion
    const conexion = await pool.getConection();
    // crear nuevo resultado
    const query = 'SELECT * FROM productos';
    // devuelve las filas
    const rows = await conexion.query(query);
    //respuesta
    res.status(200).json(rows);
  } catch (error) {
    console.log(error)
  }
})

app.post('/new-producto', async (req, res) => {
  console.log(req.body.name)
  try {
    // obtener conexion
    const conexion = await pool.getConection();

    // crear nuevo producto
    const query = "INSERT INTO productos(name,date) VALUES (?,?);";
    // devuelve las filas
    const data=new Date().toISOString().slice(0, 19).replace('T', ' ');
    const resultado = await conexion.query(query, [req.body.name,data]);

    //respuesta
    res.status(200).json({msg: "Se agrego correctamente"});

  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

app.listen(port, () => {
  console.log("Corriendo en http://localhost:" + port);
})