import * as React from 'react';
import Card from '../components/Card';

import db from '../db.json';
import { Post } from '../interfaces/blog/Post';

const HomePage = () => {
	return (
		<div className="container mx-auto">
			<div className="mt-4 flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2">
				{db.posts.map((post: Post) => (
					<Card key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
