const mariadb = require('mariadb');

const pool=mariadb.createPool({
  host: 'localhost',
  port: '3308',
  user: 'root',
  password: 'tanjiro',
  database: 'tanjiro'
}
)

const getConection = async()=>{

  try {
    const conexion= await pool.getConnection();
    return conexion;
  } catch (error) {
    console.log(error)
  }
}

module.exports ={getConection}
