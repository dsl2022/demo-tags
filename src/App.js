import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import MovieList from "./components/movieList";
// import MoviesData from "./data/movies.json";

function App() {
  return (
    <div className="App">
      <nav className={"searchBarContainer"}>
        <SearchBar />
      </nav>
      <div className={"movieListContainer"}>
        <MovieList />
      </div>
    </div>
  );
}

export default App;
