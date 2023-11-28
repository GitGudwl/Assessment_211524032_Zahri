import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Barang = db.define('barang', {
    KodeBarang: {
        type: DataTypes.STRING,
        //set it to be unique
        unique: true,
        primaryKey: true,
    },
    NamaBarang: {
        type: DataTypes.STRING,
    },
    Satuan: {
        type: DataTypes.STRING,
    },
    HargaSatuan: {
        type: DataTypes.FLOAT, // Assuming it's a floating-point number
    },
    Stok: {
        type: DataTypes.INTEGER,
    },
}, {
    tableName: 'barang',
    timestamps: false,
    freezeTableName: true
});


export default Barang;

(async () => {
    await db.sync();
})();