import { WithId } from 'mongodb';
import * as z from 'zod';
import { db } from '../../db';

export const Post = z.object({
	title: z.string().min(1),
	content: z.string().min(1),
});

export type Post = z.infer<typeof Post>;
export type PostWithId = WithId<Post>;
export const Posts = db.collection<Post>('posts');
