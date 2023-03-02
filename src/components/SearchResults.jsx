import Movie from "./Movie";

export default function SearchResults({ searchResults }) {
  const resultElements = searchResults?.map((movie, index) => (
    <Movie key={movie.title} title={movie.Title} />
  ));

  return <div className="container">{resultElements}</div>;
}
