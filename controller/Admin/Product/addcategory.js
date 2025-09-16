import  Category  from "../../../models/products/categoryModel.js";

export const addCategory =async (req,res)=>{
    const {name} = req.body;
    try {
        if(!name)
        {
            return res.status(400).json({message: "Name is required"});
        }
        const exitingCategory = await Category.findOne({name});
        if(exitingCategory)
        {
            return res.status(400).json({message: "Category already exists"});
        }

        const newCategory = await Category.create({name});
        return res.status(201).json({message: "Category created successfully", category: newCategory});

    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }
}