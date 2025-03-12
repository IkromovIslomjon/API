import React from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import { movies } from '../../constants'
import MovieInfo from '../movie-info/movie-info'
import RowMoviesItem from '../row-movies-item/row-movies-item'
import './row-movies.scss'
import MovieService from '../../services/movie-service'
import Loading from '../loader/loading'

class RowMovies extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
			movies:[],
			loading:true
		}
		this.movieService = new MovieService()
	}
	componentDidMount(){
		this.getTrendingMovies()
	}

	onToggleOpen = () => {
		this.setState(({ open }) => ({ open: !open }))
	}
	getTrendingMovies = ()=>{
		this.movieService.getTrendingMovie()
		.then(res=>this.setState({movies:res}))
		.finally(()=>this.setState({loading:false}))
	}

	render() {
		const { open, movies, loading } = this.state
		const loadingContent = loading ? <Loading/> :null


		return (
			
	
			<div className='app__rowmovie'>
			
				<div className='app__rowmovie-top'>
					<div className='app__rowmovie-top__title'>
						<img src='/tranding.svg' alt='' />
						<h1>Trending</h1>
					</div>
					<div className='hr' />
					<a href='#'>See more</a>
				</div>

				<div className='app__rowmovie-lists'>
				{loadingContent}


					
				
					{movies.map((movie) => (
						
						<RowMoviesItem
						
							key={movie.id}
							movie={movie}
							onToggleOpen={this.onToggleOpen}
						/>
					))}
				</div>

				<Modal open={open} onClose={this.onToggleOpen}>
					<MovieInfo />
				</Modal>
			</div>
		)
	}
}

export default RowMovies
