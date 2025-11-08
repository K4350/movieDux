import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
      </div>
      <footer className="footer">
        <h1>This is footer</h1>
      </footer>
    </div>
  );
}

export default App;
