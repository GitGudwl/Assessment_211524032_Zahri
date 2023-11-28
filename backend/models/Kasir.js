import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Kasir = db.define('kasir', {
    KodeKasir: {
        type: DataTypes.STRING,
        //set it to be unique
        unique: true,
        primaryKey: true,
    },
    Nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    HP: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Kasir;

(async () => {
    await db.sync();
})();