import Product from "../models/Product.js";

//Add methods for getting, adding, deleting and editing products in here: 
const getProducts = async (req, res)=>{
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

const addProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

const deleteProduct = async (req,res)=>{
    try{
        const {id} = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        console.log("Deleted product:", deleteProduct);
        res.status(200).json(deletedProduct);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

const editProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {returnDocument: 'after'});
        res.status(200).json(updatedProduct);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

export {
    getProducts,
    addProduct,
    deleteProduct,
    editProduct
}