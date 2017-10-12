import React, { Component } from 'react'
import './TextBoxComponent.css'

class TextBoxComponent extends Component {

  render() {
    return (
      <div className="TextBoxComponent">
        <div className="instruction"
          style={{
            textAlign: 'center',
          }}>
          Destroy a bubble by typing its name! 
          <button
            style={{
              marginLeft: 15,
            }}
            onClick={() => {
              this.props.restart()
            }}
          >Re-start Game</button>
        </div>
        <div className="inputOuter">
          <input type="text"
            onChange = {(val)=>{
              this.props.destroyObjectOnMatch( val.target.value )
            }}
            value = { this.props.value }
            className="emoji_field"
            placeholder="Type a bubble name here to destry the bubble"
          />
        </div>
      </div>
    );
  }
}

export default TextBoxComponent