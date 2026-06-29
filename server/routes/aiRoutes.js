const express = require('express');
const router = express.Router();
const { search, generateEmbeddingEndpoint } = require('../controllers/aiController');

router.post('/search', search);
router.post('/embedding', generateEmbeddingEndpoint);

module.exports = router;
