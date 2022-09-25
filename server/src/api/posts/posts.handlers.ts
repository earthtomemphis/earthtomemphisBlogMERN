import { NextFunction, Request, Response } from 'express';
import { Posts } from './posts.model';

export async function findAll(req: Request, res: Response, next: NextFunction) {
	try {
		const posts = await Posts.find().toArray();

		res.json(posts);
	} catch (err) {
		next(err);
	}
}
