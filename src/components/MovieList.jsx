function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.titre}>
          <h2>{movie.titre}</h2>
        </div>
      ))}
    </div>
  )
}

export default MovieList