const app = require('./app');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const User = require('./models/User');
const seedProducts = require('./utils/seedData');
const { generateEmbedding } = require('./services/aiService');

const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB().then(async () => {
  // Run Database Seeding checks
  try {
    // 1. Seed Products if catalog is empty
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      console.log('Product catalog is empty. Automatic seeding starting...');
      
      // If Gemini Key is present, try to pre-generate vector embeddings for all seed products
      let finalProducts = [...seedProducts];
      if (process.env.GEMINI_API_KEY) {
        console.log('Gemini API Key detected. Pre-generating vector embeddings for products...');
        for (let i = 0; i < finalProducts.length; i++) {
          const p = finalProducts[i];
          const textToEmbed = `${p.title} ${p.brand} ${p.category} ${p.description}`;
          try {
            const emb = await generateEmbedding(textToEmbed);
            if (emb) {
              p.embedding = emb;
              console.log(`Generated embedding for product [${i + 1}/200]: ${p.title}`);
            }
          } catch (err) {
            console.error(`Failed to generate embedding for: ${p.title}`, err.message);
          }
        }
      } else {
        console.log('No GEMINI_API_KEY provided. Seeding without cloud embeddings. Local TF-IDF search fallback will handle matching.');
      }

      await Product.insertMany(finalProducts);
      console.log(`Successfully seeded ${finalProducts.length} products into MongoDB!`);
    } else {
      console.log(`Product database already has ${productCount} records. Skipping product seed.`);
    }

    // 2. Seed default admin user if missing
    const adminExists = await User.findOne({ email: 'admin@example.com' });
    if (!adminExists) {
      await User.create({
        name: 'System Admin',
        email: 'admin@example.com',
        password: 'Password123',
        role: 'admin'
      });
      console.log('Seeded default Admin user: admin@example.com / Password123');
    }

    // 3. Seed default customer user if missing
    const customerExists = await User.findOne({ email: 'customer@example.com' });
    if (!customerExists) {
      await User.create({
        name: 'Regular Customer',
        email: 'customer@example.com',
        password: 'Password123',
        role: 'customer'
      });
      console.log('Seeded default Customer user: customer@example.com / Password123');
    }

  } catch (seedError) {
    console.error('Error seeding database:', seedError);
  }

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running in production-ready mode on port ${PORT}`);
  });
});
