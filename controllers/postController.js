const Post = require('../models/Post');
const User = require('../models/User');

exports.createPost = async (req, res) => {
  try {
    const { content, authorId } = req.body;
    const post = await Post.create({ content, author: authorId });
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: 'Post creation failed' });
  }
};

// exports.getPosts = async (req, res) => {
//   try {
//     const posts = await Post.find().sort({ createdAt: -1 }).populate('author', 'name');
//     res.json(posts);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch posts' });
//   }
// };

exports.getPosts = async (req, res) => {
  try {
    const filter = {};
    if (req.query.authorId) {
      filter.author = req.query.authorId;
    }

    const posts = await Post.find(filter)
      .sort({ createdAt: -1 })
      .populate('author', 'name');

    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

