import { Router } from 'express';
import * as PostsHandlers from './posts.handlers';

const router = Router();

router.get('/', PostsHandlers.findAll);

export default router;
