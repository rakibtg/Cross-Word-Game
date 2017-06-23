import React, { Component } from 'react'
import './TextBoxComponent.css'

class TextBoxComponent extends Component {

  render() {
    return (
      <div className="TextBoxComponent">
        <div className="instruction">Type a emoji name here</div>
        <div className="inputOuter">
          <input type="text"
            onChange = {(val)=>{
              this.props.destroyObjectOnMatch( val.target.value )
            }}
            value = { this.props.value }
            className="emoji_field"
          />
        </div>
      </div>
    );
  }
}

export default TextBoxComponent