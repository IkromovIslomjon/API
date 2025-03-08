import React from 'react'
import './hero.scss'
import MovieService from '../../services/movie-service'

class Hero extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			name:null,
			description:null,
			image:null,
			id:null
		}
		this.movieService = new MovieService()
		this.getRandomMovie()
	}

	getRandomMovie = () => {
		this.movieService.getRandomMovie().then(response=> this.setState(response))
	
	}
	render(){
		const {name, description, image} = this.state
		return (
			<div className='app__hero'>
				<div className='app__hero-info'>
					<h2>FIND MOVIES</h2>
					<h1>TV shows and more</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
						sapiente sit placeat minus dolorum, magnam, tempora quas neque quasi,
						sequi odit doloremque velit saepe autem facilis! Laudantium
						consequatur accusantium mollitia.
					</p>
					<button className='btn btn__primary'>DETAILS</button>
				</div>
				<div className='app__hero-moive'>
					<img src={image} alt='img' />
					<div className='app__hero-moive__descr'>
						<h2>{name}</h2>
						<p>
							{description && description.length > 250 ? `${description.slice(0,100)}...` : description}
						</p>
						<div>
							<button className='btn btn__secondary'>RANDOM MOVIE</button>
							<button className='btn btn__primary'>DETAILS</button>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default Hero
