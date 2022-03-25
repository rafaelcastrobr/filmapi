import { Container, Movie, MovieList } from "../Home/style"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import API_KEY from "../../config/API_KEY"
import PATH_IMG from "../../config/PATH_IMG"
import LinkRotas from "../../components/LinkRotas/LinkRotas"

export default function Recentes() {

  const [movies, setMovies] = useState([])

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY()}&language=pt-BR`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
        console.log(data)
      })
  }, [])

  return (
    <Container>
      <LinkRotas />
      <MovieList>

        {movies.map(movie => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}><img src={`${PATH_IMG()}${movie.poster_path}`} alt={movie.title} /></Link>
              <span>{movie.title}</span>
            </Movie>
          )
        })}

      </MovieList>
    </Container>
  )
}
