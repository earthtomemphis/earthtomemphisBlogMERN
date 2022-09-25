import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="bg-gray-800">
			<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
				<ul>
					<li>
						<Link to="/About" className="text-white">
							About
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
