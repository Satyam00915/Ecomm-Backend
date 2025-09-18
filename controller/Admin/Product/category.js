import  Category  from "../../../models/products/categoryModel.js";

// add category
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

// get Category
export const getAllCategories = async (req,res)=>{

    try {
        const categories = await Category.findAll({
            raw: true,
           
        });
        if(!categories){
            return res.status(404).json({message: "No categories found"});
        }
        console.log(categories);
        
        return res.status(200).json({categories});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    
    }
  

}

// remove category
export const removeCategory = async (req,res)=>{
    const {id} = req.body;

    try {
        if(!id){
            return res.status(400).json({message: "Category id is required"});
        }
        const category = await Category.findOne({where: {id: id}});
        if(!category){
            return res.status(404).json({message: "Category not found"});
        }

        await Category.destroy({where: {id: id}});
        return res.status(200).json({message: "Category removed successfully"});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error"});
    }


}