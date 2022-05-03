const router = require('express').Router();
const authCheck = require('../utils/auth.js');
const { Post, User, Comment } = require('../models');

router.use('/', (req, res) => {
    Post.findAll({
        where: { user_id: req.session.user_id }
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('all-posts', {posts});
    })
});
