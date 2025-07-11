import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register new user
// @access  Public
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // ✅ Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // ✅ Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // ✅ Create new user
    user = new User({ name, email, password: hashedPassword });
    await user.save();

    // ✅ Generate JWT Token
    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // ✅ Send token and user info
    res.status(201).json({
      token,
      user: {
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Register Error:', error.message);
    res.status(500).send('Server error');
  }
});

export default router;
