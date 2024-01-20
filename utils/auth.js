const jwt = require('jsonwebtoken');

// Secret key for JWT
const JWT_SECRET = 'your-secret-key'; // Replace with a strong secret key

// Function to generate a JWT token
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
  return token;
};

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. Token not provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired. Please log in again.' });
    }
    res.status(401).json({ error: 'Invalid token.' });
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
