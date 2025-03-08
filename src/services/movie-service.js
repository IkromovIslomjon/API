class MovieService{
    _apiBase = 'https://api.themoviedb.org/3/movie'
    _apiImage = "https://image.tmdb.org/t/p/original"

    getResources = async (url) => {
        const response = await fetch(url)

        if(!response.ok){
            throw new Error
        }
        return await response.json()
    }
    getAllPopular = async () => {
        return this.getResources(`${this._apiBase}/popular?language=en-US&page=1&api_key=d741af784b64aec7213f9cedda972c16`)


    }
    getTrendingMovies = async () => {
        return this.getResources(`${this._apiBase}/top_rated?language=en-US&page=1&api_key=d741af784b64aec7213f9cedda972c16`)

    }
    getDetailMovie = async (id) =>{
        return this.getResources(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=d741af784b64aec7213f9cedda972c16`)

    }
    getRandomMovie = async () => {
        const response = await this.getAllPopular()
        const movie = (response.results[Math.floor(Math.random() * response.results.length)])
        return this._transformMovie(movie)


    }

    _transformMovie = (movie)=>{
        return{
            name:movie.original_title,
			description:movie.overview,
			image:`${this._apiImage}${movie.poster_path}`,
			id:movie.id
        }

    }

}

export default MovieService