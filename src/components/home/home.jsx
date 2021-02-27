import React from 'react';
import birdHero from '../../images/bird-hero.jpg'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="home">
        <div className="hero-img-frame">
          <img className="hero-img" src={birdHero} alt="bird"/>
        </div> 
      </div>
    )
  }
}

export default Home