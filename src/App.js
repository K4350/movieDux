import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/69162d89d0ea881f40e6a7c4")
      .then((response) => response.json())
      .then((data) => setMovies(data.record));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header></Header>

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} />}></Route>
            <Route path="/watchlist" element={<Watchlist />}></Route>
          </Routes>
        </Router>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
