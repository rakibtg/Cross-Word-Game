import React, { Component } from 'react'
import './WordEmojiComponent.css'

import _ from 'lodash'
import ObjectComponent from './object/ObjectComponent'

class WordEmojiComponent extends Component {

  constructor( props ) {
    super( props )
    this.state = {}
  }

  render() {
    return (
      <div className="objectOuter">
        {
          _.map( this.props.objectComponents, ( item, index ) => {
            return (
              <ObjectComponent
                key = { index }
                name = { item.name }
                bgColor = { item.bgColor }
                leftMargin = { item.leftMargin }
                cssStyleName = { item.destroy ? "staticObject animated rotateOut" : "WordEmojiComponent" }
              />
            )
          } )
        }
      </div>
    )
  }
}

export default WordEmojiComponent