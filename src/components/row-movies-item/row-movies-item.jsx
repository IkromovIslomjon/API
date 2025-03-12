import React from 'react'
import './row-movies-item.scss'


class RowMoviesItem  extends React.Component{
	constructor(props){
		super(props)
		this.state={
			loading:true
		}
	}
	render(){
		

		return (
			<div className='list__item' onClick={this.props.onToggleOpen}>

			
				
				<img src={this.props.movie.image} alt={this.props.movie.name} />
				<h2>
					{this.props.movie.name}
				</h2>
				<div className='list__item-descr'>
					
					<div className='dot' />
					
				</div>
			</div>
		)
	}
}


export default RowMoviesItem
