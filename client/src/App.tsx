import { Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';

const App = () => {
	return (
		<Route>
			<Header />
			<main className="container mx-auto">
				<HomePage />
			</main>
		</Route>
	);
};

export default App;
