import React from 'react';
import './Letters.scss';

class Letter extends React.Component {
  render() {
    const letter = this.props.letter;

    return (
      <div className={`Shape ${letter.small} ${this.props.index === this.props.activeIndex ? 'active': ''}`}>
      </div>
    )
  }
}

export default Letter;