import React, { Component } from 'react'
import './WelcomeComponent.css'

class WelcomeComponent extends Component {

  startGame() {
    this.props.routeTo( 'BoardComponent' )
  }

  render() {

    return (
      <div className="WelcomeComponent">
        <h1>Welcome To CrossWord</h1>
        <p style={{lineHeight: '22px'}}>
          <div style={{paddingBottom: 7}}>CrossWord is a dead simple game!</div>
          The goal of this game is to burst all the random bubbles before they reach down to the bottom, <br/>by typing the text it contains.
        </p>
        <button
          onClick={ this.startGame.bind( this ) }
        >
          Start Game
        </button>
      </div>
    )
  }

}

export default WelcomeComponent