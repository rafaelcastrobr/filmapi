import { Container } from "./style"

import { useEffect } from "react"
import { useState } from "react"
import {Link, useParams } from "react-router-dom"
import API_KEY from "../../config/API_KEY"
import PATH_IMG from "../../config/PATH_IMG"

export default function Details () {

  const { id } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY()}&language=pt-BR&page=1`)
    .then(response => response.json())
    .then(data => {


      const movie = {
        id,
        title: data.title,
        sinopse: data.overview,
        image: `${PATH_IMG()}${data.poster_path}`,
        data_lancamento: data.release_date
      }
      
      console.log(data)
      setMovie(movie)
    })

    


  }, [id])

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.title} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release-date">Data Lançamento: {movie.data_lancamento}</span>
          <Link to="/" ><button>Voltar</button></Link>
          
        </div>
      </div>
    </Container>
  )
}