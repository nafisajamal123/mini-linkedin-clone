const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// const User = require('../models/User');
// router.get('/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select('name email bio');
//     res.json(user);
//   } catch (err) {
//     res.status(404).json({ error: 'User not found' });
//   }
// });

module.exports = router;
