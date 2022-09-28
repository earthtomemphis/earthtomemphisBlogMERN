import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import db from '../db.json';
import { Post } from '../interfaces/blog/Post';

const HomePage = () => {
	return (
		<div className="container mx-auto">
			<Header />
			<div className="mt-4 grid grid-cols-1  md:grid-cols-2">
				{db.posts.map((post: Post) => (
					<Card key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
