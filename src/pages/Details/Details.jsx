import { Container } from "./style"

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import API_KEY from "../../config/API_KEY"
import PATH_IMG from "../../config/PATH_IMG"

export default function Details() {

  const { id } = useParams()
  const paras = useParams()
  const [movie, setMovie] = useState({})
  const [genero, setGenero] = useState([])

  useEffect(() => {

      console.log(paras)

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY()}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => {
        setGenero(data.genres.map(gen => {
          return gen.name
        }))

        const movie = {
          id,
          title: data.title,
          sinopse: data.overview,
          image: `${PATH_IMG()}${data.poster_path}`,
          data_lancamento: data.release_date,
        }

        setMovie(movie)
      })


  }, [id])

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.title} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>{genero.join(' - ')}</span>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release-date">Data Lançamento: {movie.data_lancamento}</span>
          <Link to="/" ><button>Voltar</button></Link>

        </div>
      </div>
    </Container>
  )
}