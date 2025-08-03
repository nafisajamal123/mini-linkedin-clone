const express = require('express');
const { createPost, getPosts } = require('../controllers/postController');

const router = express.Router();

router.get('/', getPosts);       // ✅ for GET /api/v1/posts
router.post('/', createPost);   

// const Post = require('../models/Post');
// router.get('/user/:id', async (req, res) => {
//   try {
//     const posts = await Post.find({ author: req.params.id }).sort({ createdAt: -1 });
//     res.json(posts);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to get posts' });
//   }
// });


module.exports = router;
