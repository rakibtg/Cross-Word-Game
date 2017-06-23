import React, { Component } from 'react'
import './BoardComponent.css'

import TextBoxComponent from './textBox/TextBoxComponent'
import WordEmojiComponent from './wordEmojis/WordEmojiComponent'

class BoardComponent extends Component {

  constructor( props ) {
    super( props )
    this.state = {
      objectComponents: {},
      totalObject: 0,
      typedObjectName: '',
    }
  }

  componentDidMount() {
    this.makeObject()
    setInterval( function() {
      this.makeObject()
    }.bind( this ), Math.floor( Math.random() * 3500 ) + 1000 )
  }

  makeObject() {
    if( this.state.totalObject < 5 ) {
      let objectName = this.generateObjectName( 5 )
      const oldStateOfObject = this.state.objectComponents
      let newObj = oldStateOfObject

      newObj[ [ objectName ] ]  = {}
      newObj[ objectName ][ 'name' ] = objectName
      newObj[ objectName ][ 'destroy' ] = false
      newObj[ objectName ][ 'bgColor' ] = this.randomColor()
      newObj[ objectName ][ 'leftMargin' ] = String( Math.floor( Math.random() * 80 ) + 10 ) + '%'
      this.setState( {
        objectComponents: newObj,
        totalObject: this.state.totalObject + 1
      } )
      console.log( this.state )
    }
  }

  generateObjectName( length ) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz"
    for( var i = 0; i < length; i++ ) {
      text += possible.charAt( Math.floor( Math.random() * possible.length ) )
    }
    return text
  }

  randomColor() {
    let colors = [
      '#E6B0AA',
      '#E6B0AA',
      '#E6B0AA',
      '#AED6F1',
      '#A3E4D7',
      '#A2D9CE',
      '#A9DFBF',
      '#F9E79F',
      '#FAD7A0',
      '#F5CBA7',
      '#EDBB99',
      '#AEB6BF',
      '#85929E'
    ]
    return colors[ parseInt( Math.floor( Math.random() * 12 ) + 1 ) ]
  }

  destroyObjectOnMatch( val ) {
    console.log(val)
    this.setState( {
      typedObjectName: val
    } )
    if( this.state.objectComponents[ val ] ) {
      let oldStateOfObject = this.state.objectComponents
      oldStateOfObject[ val ][ 'destroy' ] = true
      this.setState( {
        objectComponents: oldStateOfObject,
        totalObject: this.state.totalObject - 1,
        typedObjectName: ''
      } )
    }
  }

  render() {
    return (
      <div className="BoardComponent">
        <WordEmojiComponent
          objectComponents = { this.state.objectComponents }
        />
        <TextBoxComponent
          destroyObjectOnMatch = { this.destroyObjectOnMatch.bind( this ) }
          value={ this.state.typedObjectName }
        />
      </div>
    )
  }
}

export default BoardComponent