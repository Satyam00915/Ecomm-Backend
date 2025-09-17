import Category from "../../../models/products/categoryModel";
import SubCategory from "../../../models/products/subCategory.js";

export const addSubCategory = async (req, res) => {
  try {
    const { name, categoryId } = req.body;
    if (!name || !categoryId) {
      return res.status(400).json({ message: "Provide the Subcategory" });
    }

    const existing = await SubCategory.findOne({
      where: {
        name,
      },
    });

    if (existing) {
      return res.status(400).json({ message: "SubCategory already exists" });
    }

    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(400).json({
        message: "Category not found",
      });
    }

    const subCategory = await SubCategory.create({
      name,
      categoryId,
    });

    return res.status(200).json({
      message: "SubCategory added Successfully",
      subCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

export const deleteSubCategory = async (req, res) => {
  const { id } = req.body;
  try {
    if (!id) {
      return res.status(400).json({
        message: "SubCategory Id must be provided",
      });
    }

    const found = await SubCategory.findByPk(id);
    if (!found) {
      return res.status(400).json({
        message: "SubCategory not found",
      });
    }

    await SubCategory.destroy({
      where: {
        id,
      },
    });

    return res
      .status(200)
      .json({ message: "SubCategory removed successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

export const getAllSubCategory = async (req, res) => {
  try {
    const SubCategories = await SubCategory.findAll();
    return res.status(200).json({
      message: "SubCategories Fetched",
      SubCategories,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
};
