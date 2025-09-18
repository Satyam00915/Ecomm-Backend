import { sequelize } from "../../config/dbConnect.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User",{
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
    number:{
        type: DataTypes.STRING,
        max: 10,
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        
        allowNull:false
    },
    alternateNumber:{
        type: DataTypes.STRING,
        allowNull:true,
        unique:true
    },
    isVerified:{
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    otp:{
        type: DataTypes.STRING,
        allowNull:true,
        max: 6
    },
    otpExpiry:{
        type: DataTypes.DATE,
        allowNull:true
    }
},{
    freezeTableName:true
})

export default User;