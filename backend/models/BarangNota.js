// Import necessary modules and models
import db from "../config/database.js";
import { DataTypes } from 'sequelize';
import Nota from './Nota.js'; // Assuming the Nota model file is named Nota.js
import Barang from './Barang.js'; // Assuming the Barang model file is named Barang.js

// Define the BarangNota model
const BarangNota = db.define('BarangNota', {
  KodeNota: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  KodeBarang: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  JumlahBarang: {
    type: DataTypes.INTEGER, // Assuming it's an integer
    allowNull: false,
  },
  HargaSatuan: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  Jumlah: {
    type: DataTypes.FLOAT, // Assuming it's a floating-point number
    allowNull: false,
    timestamps: false,
  },
});

// Establish relationships
BarangNota.belongsTo(Nota, { foreignKey: 'KodeNota', onDelete: 'CASCADE' });
Nota.hasMany(BarangNota, { foreignKey: 'KodeNota', onDelete: 'CASCADE' });

BarangNota.belongsTo(Barang, { foreignKey: 'KodeBarang', onDelete: 'SET NULL' });
Barang.hasMany(BarangNota, { foreignKey: 'KodeBarang', onDelete: 'SET NULL' });

export default BarangNota;

(async () => {
  await db.sync();
})();
