const axios = require('axios');

// Basic English Stopwords list to filter out noisy words in local fallback mode
const STOPWORDS = new Set([
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', 'arent', 'as', 'at', 
  'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by', 'cant', 'cannot', 'could', 
  'did', 'didnt', 'do', 'does', 'doesnt', 'doing', 'dont', 'down', 'during', 'each', 'few', 'for', 'from', 'further', 
  'had', 'hadnt', 'has', 'hasnt', 'have', 'havent', 'having', 'he', 'hed', 'hell', 'hes', 'her', 'here', 'heres', 
  'hers', 'herself', 'him', 'himself', 'his', 'how', 'hows', 'i', 'id', 'ill', 'im', 'ive', 'if', 'in', 'into', 'is', 
  'isnt', 'it', 'its', 'itself', 'lets', 'me', 'more', 'most', 'mustnt', 'my', 'myself', 'no', 'nor', 'not', 'of', 
  'off', 'on', 'once', 'only', 'or', 'other', 'ought', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'same', 
  'shant', 'she', 'shed', 'shell', 'shes', 'should', 'shouldnt', 'so', 'some', 'such', 'than', 'that', 'thats', 
  'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', 'theres', 'these', 'they', 'theyd', 'theyll', 
  'theyre', 'theyve', 'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'wasnt', 
  'we', 'wed', 'well', 'were', 'weve', 'werent', 'what', 'whats', 'when', 'whens', 'where', 'wheres', 'which', 
  'while', 'who', 'whos', 'whom', 'why', 'whys', 'with', 'wont', 'would', 'wouldnt', 'you', 'youd', 'youll', 
  'youre', 'youve', 'your', 'yours', 'yourself', 'yourselves'
]);

/**
 * Clean and tokenize text
 */
function tokenize(text) {
  if (!text) return [];
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // remove punctuation
    .split(/\s+/)
    .filter(word => word.length > 1 && !STOPWORDS.has(word));
}

/**
 * Local Fallback Semantic Scorer: Cosine similarity on TF-IDF term vectors
 */
function calculateLocalSimilarity(query, products) {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return products.map(p => ({ product: p, score: 0 }));

  // Build document corpus (combination of title, description, category, brand)
  const docs = products.map((p, idx) => ({
    id: idx,
    tokens: tokenize(`${p.title} ${p.brand} ${p.category} ${p.description}`)
  }));

  // Calculate Document Frequency (DF) for IDF calculation
  const df = {};
  const totalDocs = docs.length;

  docs.forEach(doc => {
    const uniqueTokensInDoc = new Set(doc.tokens);
    uniqueTokensInDoc.forEach(token => {
      df[token] = (df[token] || 0) + 1;
    });
  });

  // Calculate IDF
  const idf = {};
  Object.keys(df).forEach(token => {
    idf[token] = Math.log(1 + (totalDocs / df[token]));
  });

  // Compute query vector (TF-IDF)
  const queryVector = {};
  const queryTokenFreq = {};
  queryTokens.forEach(t => {
    queryTokenFreq[t] = (queryTokenFreq[t] || 0) + 1;
  });
  queryTokens.forEach(t => {
    queryVector[t] = queryTokenFreq[t] * (idf[t] || 1.0);
  });

  const queryNorm = Math.sqrt(Object.values(queryVector).reduce((sum, v) => sum + v * v, 0));

  // Compute similarity score for each product
  const scored = products.map((product, idx) => {
    const docTokens = docs[idx].tokens;
    const docTokenFreq = {};
    docTokens.forEach(t => {
      docTokenFreq[t] = (docTokenFreq[t] || 0) + 1;
    });

    const docVector = {};
    docTokens.forEach(t => {
      docVector[t] = docTokenFreq[t] * (idf[t] || 0);
    });

    // Cosine similarity: (A . B) / (|A| * |B|)
    let dotProduct = 0;
    Object.keys(queryVector).forEach(t => {
      if (docVector[t]) {
        dotProduct += queryVector[t] * docVector[t];
      }
    });

    const docNorm = Math.sqrt(Object.values(docVector).reduce((sum, v) => sum + v * v, 0));

    let score = 0;
    if (queryNorm > 0 && docNorm > 0) {
      score = dotProduct / (queryNorm * docNorm);
    }

    // Boost score slightly if direct keyword match in title
    const titleLower = product.title.toLowerCase();
    queryTokens.forEach(t => {
      if (titleLower.includes(t)) {
        score += 0.15;
      }
    });

    return { product, score };
  });

  return scored;
}

/**
 * Cosine similarity between two vector arrays
 */
function cosineSimilarity(vecA, vecB) {
  if (!vecA || !vecB || vecA.length !== vecB.length) return 0;
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  return normA === 0 || normB === 0 ? 0 : dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Generate embedding using Gemini Text Embedding API
 */
async function generateEmbedding(text) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }

  const models = ["models/text-embedding-004", "models/embedding-001"];

  for (const model of models) {
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/${model}:embedContent?key=${apiKey}`,
        {
          model: model,
          content: {
            parts: [{ text: text }]
          }
        }
      );
      if (response.data && response.data.embedding && response.data.embedding.values) {
        return response.data.embedding.values;
      }
    } catch (error) {
      // Log warning and continue to next model in loop
      const errMsg = error.response?.data?.error?.message || error.message;
      console.warn(`Gemini Model ${model} failed: ${errMsg}. Trying fallback model...`);
    }
  }

  console.error("Gemini API Embedding Error: All embedding models failed.");
  return null;
}

/**
 * Main Search Logic
 */
async function searchSemantic(query, products) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey) {
    console.log("Generating Gemini embedding for search query:", query);
    const queryEmbedding = await generateEmbedding(query);
    
    if (queryEmbedding) {
      // Perform cosine similarity against stored product embeddings
      const scored = products.map(product => {
        let score = 0;
        if (product.embedding && product.embedding.length > 0) {
          score = cosineSimilarity(queryEmbedding, product.embedding);
        } else {
          // Fallback to local scoring if product is missing embedding
          const localMatch = calculateLocalSimilarity(query, [product]);
          score = localMatch[0].score;
        }
        return { product, score };
      });
      return scored;
    }
  }

  // Fallback mode if key is not configured or fails
  console.log("Using Local TF-IDF Cosine Similarity for search query:", query);
  return calculateLocalSimilarity(query, products);
}

module.exports = {
  generateEmbedding,
  searchSemantic,
  calculateLocalSimilarity
};
