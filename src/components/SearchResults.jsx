import Movie from "./Movie";

export default function SearchResults({ searchResults }) {
  const movieElements = searchResults.map((movie) => <Movie movieId={movie} />);

  return <div className="container">{movieElements}</div>;
}
