class MovieService {
    _apiKey = "d741af784b64aec7213f9cedda972c16"
    _apiImage = "https://image.tmdb.org/t/p/original"
    getResource = async (url) =>{
        const response = await fetch(url)

        if(!response.ok){
            throw new Error
        }
        return await response.json()

    }

    getTrendingMovie = async() => {
      const response = await  this.getResource(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${this._apiKey}`)
      const movies = response.results
      return movies && movies.map(movie=>this.transformMovie(movie))

    }

    getPopularMovie = async() =>{
        return this.getResource(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${this._apiKey}`)

    }
   
    getMovieDetail = async(id) => {
        return  this.getResource(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${this._apiKey}`) 

    }
    getRandomMovie = async()=>{
    const response = await this.getPopularMovie()
    const movie = response.results[Math.floor(Math.random() * response.results.length)]
    
       return this.transformMovie(movie)

    }

    transformMovie = (movie) =>{
        return{
            name:movie.original_title,
            description:movie.overview,
            image:`${this._apiImage}${movie.poster_path}`,
            id:movie.id
        }
    }
}
export default MovieService