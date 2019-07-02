import React, { Component } from 'react'
import Film from './film'
import AddMovie from './modal'
import Rating from './star'

const movie = [
  { title: 'Hackathon FST', description: 'Ce hackathon a été fait le 5 mai 2019 par la faculté de sciences de Tunis', image:'https://upload.wikimedia.org/wikipedia/fr/thumb/d/d0/FSTLOGO.svg.svg/1200px-FSTLOGO.svg.svg.png' , rating: 2 },
  { title: 'Hackathon ENICAR', description: 'Ce hackathon a été fait le 10 mai 2019', image:'https://upload.wikimedia.org/wikipedia/fr/c/c2/Logo_ENICarthage.jpg', rating: 3 },
  { title: 'Hackathon INSAT', description: 'Ce hackathon a été fait le 15 mai 2019', image:"https://www.etudiant.ma//uploads/article/cover/9787/large_Actu-5.png", rating: 1 }
]
export default class Hackathon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minrate: 0,
      movielist: movie,
      search :''
    }
  }

  click = (e) => {
    this.setState({
      minrate: e
    })
  }
searching=(e)=>{
  this.setState({search: e.target.value})
}

addNewMovie = ({image, title, description, rating}) => {
  this.setState({
    movielist: this.state.movielist.concat({image, title, description, rating})
  })
}

  render() {
    return (

      <div className="Home">
        <div className="list">
          <div className="header">

            <input className='searchbar' type='' placeholder='Type hackathon name to search' onChange={(e)=>this.searching(e)}/>
            {/* <AddMovie addMovie={this.addNewMovie}/> */}
             <div className='rating'> 
              {/* <p>
                Minimum rating
            </p>  */}

              <div className="star">
                <Rating modifyRating={this.click} rating={this.state.minrate}/>
              </div>
            </div>
          </div>
          <Film list={this.state.movielist.filter(el=> el.title.toUpperCase().includes(this.state.search.toUpperCase().trim()) && el.rating>=this.state.minrate ) } />
        </div>

      </div>

    )
  }
}

