import axios from 'axios'


// const { API_KEY } = process.env

const url = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`

const vai = url => {
  axios.get(url)
    .then(res => {
      return res.data.title
    })
}


exports.handler = async function (event, context) {

  return axios.get(url)
  .then((res) => ({
    statusCode: 200,
    body: JSON.stringify(res.results) 
  }))
}