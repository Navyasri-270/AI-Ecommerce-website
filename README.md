# AI-Ecommerce Website

An AI-powered e-commerce platform built with React and Node.js.

## 🌐 Live Demo
**[Visit the App](https://ai-ecommerce-website-1-h3uk.onrender.com)**

## Features
- AI-powered product search
- User authentication
- Shopping cart & checkout
- Admin dashboard
- 160+ products

## Tech Stack
- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB Atlas
- Hosting: Render

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
