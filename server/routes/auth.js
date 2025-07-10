// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET = "your_jwt_secret"; // store securely in .env

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Mock check — replace with DB lookup
  if (email === 'user@example.com' && password === 'password123') {
    const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
