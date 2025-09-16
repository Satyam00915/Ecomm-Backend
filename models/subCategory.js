import { sequelize } from "../config/dbConnect";
import Category from "./categoryModel";

const SubCategory = sequelize.define("SubCategory", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

Category.hasMany(SubCategory, { foreignKey: "categoryId" });
SubCategory.belongsTo(Category, { foreignKey: "categoryId" });

export default SubCategory;
