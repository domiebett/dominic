import React from 'react';
import LeftArrow from '../../shared/arrows/LeftArrow';
import RightArrow from '../../shared/arrows/RightArrow';
import { lettersData } from '../../../data/LettersData';
import Letter from './letters/Letter';
import { getRandomColor } from '../../../utils/Color';
import './LettersGame.scss';

class LettersGame extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0,
      currentColor: getRandomColor()
    }
  }

  goToNextLetter(e) {
    e.preventDefault()

    let index = this.state.activeIndex;
    if (index >= (lettersData.length -1)) {
      index = 0;
    } else {
      index++;
    }

    this.setState({
      activeIndex: index,
      currentColor: getRandomColor()
    });
  }

  goToPreviousLetter(e) {    
    e.preventDefault();

    let index = this.state.activeIndex;
    if (index < 1) {
      index = lettersData.length - 1;
    } else {
      index--;
    }

    this.setState({
      activeIndex: index,
      currentColor: getRandomColor()
    })
  }

  render() {
    return (
      <div className="LettersGameContainer">
        <h3>Letters</h3>
        <div className="ArrowContainer">
          <LeftArrow onClick={e => this.goToPreviousLetter(e)}></LeftArrow>
          <RightArrow onClick={e => this.goToNextLetter(e)}></RightArrow>
        </div>
        <div style={{ maxWidth: 200 }} className="LetterContainer">
          {lettersData.map((letter, index) => {
            return <Letter
              key={index}
              letter={letter}
              activeIndex={this.state.activeIndex}
              currentColor={this.state.currentColor}
              index={index}></Letter>
          })}
        </div>
      </div>
    );
  }
}

export default LettersGame
