import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import HomePage from './pages/HomePage';

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
