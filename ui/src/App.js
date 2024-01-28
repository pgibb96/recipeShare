import logo from './logo.svg';
import './App.css';

async function logMovies() {
  const response = await fetch("http://localhost:8080/ping");
  const movies = await response.json();
  console.log(movies);
}


function App() {

  logMovies()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
