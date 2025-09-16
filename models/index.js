import {sequelize} from "../config/dbConnect.js"
import Category from "./products/categoryModel.js";
import SubCategory from "./products/subCategory.js";
import {Product, ProductBrand, ProductColor, ProductImage, ProductSize} from "../models/products/productModel.js"

Category.hasMany(SubCategory, { 
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
SubCategory.belongsTo(Category, { 
  foreignKey: 'categoryId' 
});

// Category -> Product (One-to-Many)
Category.hasMany(Product, { 
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Product.belongsTo(Category, { 
  foreignKey: 'categoryId' 
});

// SubCategory -> Product (One-to-Many)
SubCategory.hasMany(Product, { 
  foreignKey: 'subCategoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Product.belongsTo(SubCategory, { 
  foreignKey: 'subCategoryId' 
});

// Product -> ProductColor (One-to-Many)
Product.hasMany(ProductColor, { 
  foreignKey: 'productId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
ProductColor.belongsTo(Product, { 
  foreignKey: 'productId' 
});

// Product -> ProductImage (One-to-Many)
Product.hasMany(ProductImage, { 
  foreignKey: 'productId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
ProductImage.belongsTo(Product, { 
  foreignKey: 'productId' 
});

// Product -> ProductSize (One-to-Many)
Product.hasMany(ProductSize, { 
  foreignKey: 'productId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
ProductSize.belongsTo(Product, { 
  foreignKey: 'productId' 
});

// Product -> ProductBrand (One-to-Many)
Product.hasMany(ProductBrand, { 
  foreignKey: 'productId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
ProductBrand.belongsTo(Product, { 
  foreignKey: 'productId' 
});

// Export all models
export {
  Category,
  SubCategory,
  Product,
  ProductColor,
  ProductImage,
  ProductSize,
  ProductBrand
};