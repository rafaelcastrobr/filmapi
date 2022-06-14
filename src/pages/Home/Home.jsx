import { Container, Movie, MovieList } from "../Home/style"
import { useState, useEffect } from "react"
import API_KEY from "../../config/API_KEY"
import PATH_IMG from "../../config/PATH_IMG"
import { Link } from "react-router-dom"
import LinkRotas from "../../components/LinkRotas/LinkRotas"
import axios from "axios"

export default function Home() {

  const [movies, setMovies] = useState([])

  useEffect(() => {

    //fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY()}&language=pt-BR&page=1`)
    axios.get('/.netlify/functions/hello-world')
      .then(data => {
        console.log(JSON.parse(data.message))
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
