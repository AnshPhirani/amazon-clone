import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
