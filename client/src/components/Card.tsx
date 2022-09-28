import React from 'react';
import { Post } from '../interfaces/blog/Post';

const Card: React.FC<{ post: Post }> = ({ post }) => {
	return (
		<div className="card w-2/3 mx-auto bg-base-100 shadow-xl m-8">
			<figure>
				<img
					src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{post.title}</h2>
				<p>{post.excerpt}</p>
				<span>By: {post.author}</span>
				<span>Posted; {post.date}</span>
				<div className="card-actions justify-end">
					<button className="btn btn-primary mt-2">Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
