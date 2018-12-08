import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const opac = (this.props.opacity);
    const newOpac = (opac - 0.1);

    if (opac >= 0.2) {
      return (
        <div className="color-box" style={{opacity: opac}}>
          <ColorBox opacity = {newOpac} />
        </div>
      );
    } else {
      return null;
    }
  }
}
