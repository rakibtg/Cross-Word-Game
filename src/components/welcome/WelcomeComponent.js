import React, { Component } from 'react'
import './WelcomeComponent.css'

class WelcomeComponent extends Component {

  startGame() {
    this.props.routeTo( 'BoardComponent' )
  }

  render() {

    return (
      <div className="WelcomeComponent">
        <h1>Welcome guys</h1>
        <button
          onClick={ this.startGame.bind( this ) }
        >
          Play
        </button>
      </div>
    )
  }
  
}

export default WelcomeComponent