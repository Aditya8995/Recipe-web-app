import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
