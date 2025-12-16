// Main entry point for AI Books and Agents application

const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());

// Routes
app.get('/api', (req, res) => {
  res.json({ 
    message: 'AI Books and Agents API', 
    version: '1.0.0' 
  });
});

// AI Agent routes
app.use('/api/agents', require('./src/routes/agents'));
// AI Book generation routes
app.use('/api/books', require('./src/routes/books'));
// RAG Chatbot routes
app.use('/api/rag', require('./src/routes/rag'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false,
    error: 'Something went wrong!',
    message: err.message 
  });
});

// 404 handler - should be last
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    error: 'Route not found' 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;