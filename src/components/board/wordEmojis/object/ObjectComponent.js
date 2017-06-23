import React, { Component } from 'react'
import './ObjectComponent.css'

class ObjectComponent extends Component {

  constructor( props ){
    super( props )
    this.state = {
      windowHeight: 0,
      objectMarginTop: 0
    }
  }

  componentDidMount() {
    this.setState( {
      windowHeight: window.innerHeight
    }, () => {
      this.scrollWordObject()
    } )
  }

  scrollWordObject() {
    this.setState( {
      windowHeight: window.innerHeight,
    }, () => {
      for( let i = 0; i < this.state.windowHeight; i++ ) {
        setTimeout(function() {
          this.setState({
            objectMarginTop: i
          })
        }.bind(this), i * 80 )
      }
    } )
  }

  render() {
    return (
      <div 
        className = { this.props.cssStyleName }
        style={ {
          marginLeft: this.props.leftMargin,
          marginTop: this.state.objectMarginTop,
          backgroundColor: this.props.bgColor,
        } }
        >
        { this.props.name }
      </div>
    )
  }
}

export default ObjectComponent