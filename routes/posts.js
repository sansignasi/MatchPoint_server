const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/', (req, res) => {
	res.send("We are on posts");
});

router.get('/specific', (req, res) => {
	res.send("Specific");
});



router.post('/', (req, res) => {
	const post = new Post({
		title: req.body.title,
		age: req.body.age
	});

	post.save()
		.then(data => {
			res.json(post);
		});
		/* .catch(err => {
			res.json({message:err});
		}); */
});

module.exports = router;
