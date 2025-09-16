import { DataTypes } from "sequelize";
import { sequelize } from "../../config/dbConnect.js";

const Product = sequelize.define("Product", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  moq: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  weight: { type: DataTypes.FLOAT },
  stock: { type: DataTypes.INTEGER, defaultValue: 0 },
  description: { type: DataTypes.TEXT },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subCategoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  freezeTableName: true
});

const ProductColor = sequelize.define("ProductColor", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  color: { type: DataTypes.STRING, allowNull: false },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  freezeTableName: true
});

const ProductImage = sequelize.define("ProductImage", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  imageUrl: { type: DataTypes.STRING, allowNull: false },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  freezeTableName: true
});

const ProductSize = sequelize.define("ProductSize", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  size: { type: DataTypes.STRING, allowNull: false },
  productId: { 
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  freezeTableName: true
});

const ProductBrand = sequelize.define("ProductBrand", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  brand: { type: DataTypes.STRING, allowNull: false },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  freezeTableName: true
});


export { Product, ProductColor, ProductImage, ProductSize, ProductBrand };
