import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    if (this.props.opacity >= 0.2) {
      let opacity = this.props.opacity
      let newOpacity = opacity - 0.1
      return (
        <div className="color-box" style={{opacity: opacity}}>
          {<ColorBox opacity={newOpacity}/>}
        </div>
      )
    } else {
      return null
    }
    
  }
  
}
