const Product = require("../models/productModel");

exports.createProducts = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    message: "Product Created",
    product,
  });
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(201).json({
    message: "Products Fetched",
    products,
  });
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({
      message: "Product not found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    message: "Product Updated",
    product,
  });  

};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    res.status(404).json({
      message: "Product not found",
    });
  }

  await product.remove();

  res.status(201).json({
    message: "Product Deleted",
    product,
  }); 

};
