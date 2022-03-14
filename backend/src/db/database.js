const mariadb = require('mariadb');

const pool=mariadb.createPool({
  host: '172.22.0.1',
  port: '3309',
  user: 'tanjiro',
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
