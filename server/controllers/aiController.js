const Product = require('../models/Product');
const { searchSemantic, generateEmbedding } = require('../services/aiService');

// @desc    Perform semantic vector search for products
// @route   POST /api/ai/search
// @access  Public
exports.search = async (req, res) => {
  try {
    const { query } = req.body;
    if (!query || query.trim() === '') {
      return res.status(400).json({ success: false, message: 'Please provide a search query' });
    }

    // Retrieve all products to search across
    const products = await Product.find({});
    
    // Perform semantic mapping
    const searchResults = await searchSemantic(query, products);

    // Sort by score descending and take products with score > 0.05
    const sortedResults = searchResults
      .sort((a, b) => b.score - a.score)
      .filter(item => item.score > 0.05)
      .map(item => {
        // Return product with score injected
        const prodObj = item.product.toObject();
        prodObj.searchScore = item.score;
        return prodObj;
      });

    res.json({ success: true, count: sortedResults.length, data: sortedResults });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get raw text embeddings
// @route   POST /api/ai/embedding
// @access  Public
exports.generateEmbeddingEndpoint = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ success: false, message: 'Please provide text' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(400).json({ 
        success: false, 
        message: 'Gemini API Key is not configured on server. Falling back to local search matching.' 
      });
    }

    const embedding = await generateEmbedding(text);
    if (!embedding) {
      return res.status(500).json({ success: false, message: 'Failed to generate embedding' });
    }

    res.json({ success: true, embedding });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
