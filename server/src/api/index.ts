import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import posts from './posts/posts.routes';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
	res.json({
		message: 'API - 👋🌎🌍🌏',
	});
});

router.use('/posts', posts);

export default router;
