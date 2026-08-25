import { useState } from "react"
import Filtre from "./components/Filtre"
import MovieList from "./components/MovieList"
import "./App.css"

function App() {
  const [movies, setMovies] = useState([
    {
      titre: "Titanic",
      description: "Une histoire d'amour.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      note: 5
    },
    {
      titre: "Avatar",
      description: "Un film de science-fiction.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
      note: 4
    }
  ])

  const [titre, setTitre] = useState("")
  const [note, setNote] = useState("")

  return (
    <div>
      <h1>🎬 Mon application de cinéma</h1>

      <MovieList movies={movies} />
    </div>
  )
}

export default App