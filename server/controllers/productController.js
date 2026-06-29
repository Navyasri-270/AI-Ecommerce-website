const Product = require('../models/Product');
const { generateEmbedding } = require('../services/aiService');

// @desc    Get all products (with filters)
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res) => {
  try {
    const { category, brand, minPrice, maxPrice, search } = req.query;
    let query = {};

    if (category) {
      query.category = category;
    }

    if (brand) {
      query.brand = brand;
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      // Standard regex text fallback search (for search without AI semantic mode trigger)
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { brand: { $regex: search, $options: 'i' } }
      ];
    }

    const products = await Product.find(query).sort({ createdAt: -1 });
    res.json({ success: true, count: products.length, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    
    // Fetch related products (same category, excluding current product, limit 4)
    const related = await Product.find({
      category: product.category,
      _id: { $ne: product._id }
    }).limit(4);

    res.json({ success: true, data: product, related });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create a product (Admin only)
// @route   POST /api/products
// @access  Private/Admin
exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, category, image, stock, brand, rating } = req.body;

    // Build product data
    const productData = {
      title,
      description,
      price: Number(price),
      category,
      image,
      stock: Number(stock),
      brand,
      rating: Number(rating) || 4.0
    };

    // If Gemini API key is active, generate vector embedding automatically
    if (process.env.GEMINI_API_KEY) {
      const textToEmbed = `${title} ${brand} ${category} ${description}`;
      const embedding = await generateEmbedding(textToEmbed);
      if (embedding) {
        productData.embedding = embedding;
      }
    }

    const product = await Product.create(productData);
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update a product (Admin only)
// @route   PUT /api/products/:id
// @access  Private/Admin
exports.updateProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const updates = req.body;
    
    // Regeneate embedding if key details changed
    if (
      process.env.GEMINI_API_KEY &&
      (updates.title || updates.description || updates.brand || updates.category)
    ) {
      const newTitle = updates.title || product.title;
      const newBrand = updates.brand || product.brand;
      const newCategory = updates.category || product.category;
      const newDesc = updates.description || product.description;
      
      const textToEmbed = `${newTitle} ${newBrand} ${newCategory} ${newDesc}`;
      const embedding = await generateEmbedding(textToEmbed);
      if (embedding) {
        updates.embedding = embedding;
      }
    }

    product = await Product.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true
    });

    res.json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete a product (Admin only)
// @route   DELETE /api/products/:id
// @access  Private/Admin
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    await product.deleteOne();
    res.json({ success: true, message: 'Product removed' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
