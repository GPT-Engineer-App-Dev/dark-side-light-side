import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import OthelloGame from './pages/OthelloGame';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/othello" element={<OthelloGame />} />
      </Routes>
    </Router>
  );
}

export default App;
