import db from "../config/database.js";
import { DataTypes } from 'sequelize';
import Tenan from './Tenan.js';
import Kasir from './Kasir.js';

const Nota = db.define('Nota', {
  KodeNota: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  KodeTenan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  KodeKasir: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TglNota: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  JamNota: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  JumlahBelanja: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  Diskon: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  Total: {
    type: DataTypes.INTEGER,
    allowNull: false,
    timestamps: false,
  },
});

// Establish relationships
Nota.belongsTo(Tenan, { foreignKey: 'KodeTenan', onDelete: 'SET NULL' });
Tenan.hasMany(Nota, { foreignKey: 'KodeTenan', onDelete: 'SET NULL' });

Nota.belongsTo(Kasir, { foreignKey: 'KodeKasir', onDelete: 'CASCADE' });
Kasir.hasMany(Nota, { foreignKey: 'KodeKasir', onDelete: 'CASCADE' });

export default Nota;

(async () => {
    await db.sync();
})();
