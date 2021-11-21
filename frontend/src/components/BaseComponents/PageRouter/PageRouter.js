import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import the pages
import HomeScreen from "../../../screens/HomeScreen"

function PageRouter() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<HomeScreen />} />
        </Routes>
    </Router>
  );
}

export default PageRouter;