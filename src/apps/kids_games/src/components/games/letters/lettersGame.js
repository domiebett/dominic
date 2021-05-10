import React from 'react';
import LeftArrow from '../../shared/arrows/LeftArrow';
import RightArrow from '../../shared/arrows/RightArrow';

class LettersGame extends React.Component {
  goToNextLetter(e) {
    console.log('next letter');
  }

  goToPreviousLetter(e) {
    console.log('previous letter');
  }

  render() {
    return (
      <div className="LettersGameContainer">
        <h3>Letters</h3>
        <div className="ArrowContainer">
          <LeftArrow onClick={e => this.goToPreviousLetter(e)}></LeftArrow>
          <RightArrow onClick={e => this.goToNextLetter(e)}></RightArrow>
        </div>
      </div>
    );
  }
}

export default LettersGame
