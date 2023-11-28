import {Sequelize} from "sequelize";

const db = new Sequelize('pujas2', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres', 
    logging: false,
});

db.authenticate()
  .then(() => {
    console.log('Koneksi ke PostgreSQL berhasil.');
  })
  .catch((error) => {
    console.error('Gagal terhubung ke PostgreSQL:', error);
  });

export default db;