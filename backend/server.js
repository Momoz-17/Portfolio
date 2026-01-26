const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// --- UPDATE STARTS HERE ---
// 1. Define which websites are allowed to talk to your backend
const allowedOrigins = [
  'http://localhost:5173',                   // Local development
  'https://mohit-portfolio-backend.onrender.com',  // Your future Render URL
  'https://mohit-portfolio-frontend.onrender.com' // Your future Render URL
];

// 2. Replace app.use(cors()) with this detailed version
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
// --- UPDATE ENDS HERE ---

app.use(express.json()); 

// Define Routes
app.use('/api/contact', require('./routes/contact.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));