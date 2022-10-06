import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import HomePage from './pages/HomePage';

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<HomePage />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
