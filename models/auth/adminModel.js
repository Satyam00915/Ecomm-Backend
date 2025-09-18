import { sequelize } from "../../config/dbConnect.js";
import { DataTypes } from "sequelize";

const Admin = sequelize.define("Admin",{
        id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
        },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
        
    }

},{
    freezeTableName:true
})

export default Admin;