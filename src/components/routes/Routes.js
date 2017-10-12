import React, { Component } from 'react';

import WelcomeComponent from '../welcome/WelcomeComponent'
import BoardComponent from '../board/BoardComponent'

class Routes extends Component {

  constructor( props ) {
    super( props )
    this.state = {
      currentComponent: 'WelcomeComponent'
    }
  }

  setCurrentComponent( currentComponentName ) {
    this.setState( {
      currentComponent: currentComponentName
    } ) 
  }

  render() {
    switch( this.state.currentComponent ) {
      case 'BoardComponent':
        return <BoardComponent
          routeTo = { this.setCurrentComponent.bind( this ) }
        />
      default:
        return <WelcomeComponent
          routeTo = { this.setCurrentComponent.bind( this ) }
        />
    }
  }
}

export default Routes;
