const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');



router.get('/blogs',blogController.getAllblog)
router.post('/add-blog',blogController.addBlog)
router.get('/blog/:blog_id',blogController.findABlog)
router.get('/deleteblog/:id',blogController.deleteBlog)


module.exports = router;
