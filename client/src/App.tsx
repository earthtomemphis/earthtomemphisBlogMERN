import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
	return (
		<Router>
			<Route>
				<Route path="/" element={<HomePage />} />
			</Route>
		</Router>
	);
};

export default App;
