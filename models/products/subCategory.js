import { DataTypes } from "sequelize";
import { sequelize } from "../../config/dbConnect.js";

const SubCategory = sequelize.define("SubCategory", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  freezeTableName: true
});

export default SubCategory;