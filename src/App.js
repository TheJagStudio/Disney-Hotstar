import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Sidebar from "./Components/Sidebar/Sidebar";

// Pages
import DetailsPage from "./Pages/DetailsPage";
import ExplorePage from "./Pages/ExplorePage";
import HomePage from "./Pages/HomePage";

function App() {
	return (
		<Router>
			<Sidebar />
			<div className="">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/movie/:id" element={<DetailsPage />} />
					<Route path="/explore" element={<ExplorePage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
