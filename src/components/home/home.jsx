import React from 'react';
import birdHero from '../../images/bird-hero.jpg'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
        <div className="hero-img-frame">
          <img className="hero-img" src={birdHero} />
        </div> 
      </div>
    )
  }
}

export default Home