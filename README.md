# Production-Ready AI-Powered E-Commerce Platform

A complete, fullstack AI-powered E-Commerce application featuring robust JWT Authentication, local/global AI Semantic Search, automatic DB seeding (200+ products), cart syncing, order tracking, and an Admin dashboard.

## Tech Stack

- **Frontend**: React (Vite), React Router DOM, Tailwind CSS, Axios, Context API
- **Backend**: Node.js, Express.js, JWT, bcryptjs
- **Database**: MongoDB & Mongoose
- **AI**: Built-in TF-IDF Local Semantic Search and Gemini API integration for generating high-quality Vector Search embeddings.

## Getting Started

To make running this project simple, you can install and run both the frontend and backend directly from this root directory.

### Installation

1. Copy files into your project folder.
2. Configure `.env` in this root directory (a default one has been generated for you).
3. Install all dependencies for both frontend and backend by running this single command in the root folder:
   ```bash
   npm run install-all
   ```

### Running the Application

To boot up both the **Backend API** (port 5000) and the **Frontend Web App** (port 5173) simultaneously:
```bash
npm run dev
```

Once started:
- Open your browser to `http://localhost:5173` to browse the store.
- The server will automatically connect to MongoDB and seed **200+ products** along with standard user accounts if your database is empty.

## Seed Accounts and Credentials

The system seeds these default accounts for testing:

- **Admin Account** (Manage products, view orders, update delivery status):
  - Email: `admin@example.com`
  - Password: `Password123`
- **Customer Account** (Add to cart, place orders, view order history):
  - Email: `customer@example.com`
  - Password: `Password123`
