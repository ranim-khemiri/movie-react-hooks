function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.titre}</h2>
      <p>{movie.description}</p>
      <p>Note : {movie.note}</p>
      <img src={movie.posterURL} alt={movie.titre} width="150" />
    </div>
  )
}

export default MovieCard