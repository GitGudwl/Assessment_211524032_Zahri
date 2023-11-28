import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Tenan = db.define('tenan', {
    KodeTenan: {
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
},{
    tableName: 'tenan',
    timestamps: false,
    freezeTableName: true
});


export default Tenan;

(async () => {
    await db.sync();
})();