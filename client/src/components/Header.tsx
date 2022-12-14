import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div
			className="navbar 
		bg-base-100"
		>
			<div className="flex-1">
				<a href="/" className="btn btn-ghost normal-case text-xl">
					earthtomemphis
				</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal p-0">
					<li>
						<Link to="/">Blog</Link>
					</li>
					{/* <li>
						<a href="/">
							Parent
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
							>
								<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
							</svg>
						</a>
						<ul className="p-2 bg-base-100">
							<li>
								<a href="/">Submenu 1</a>
							</li>
							<li>
								<a href="/"> Submenu 2</a>
							</li>
						</ul>
					</li> */}
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
