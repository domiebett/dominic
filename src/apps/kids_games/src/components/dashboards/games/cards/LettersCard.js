import React from 'react';
import Card from '../../../shared/Card';
import './LettersCard.scss';

class LettersCard extends React.Component {
  render() {
    return (
      <div className="LettersCard" onClick={() => this.props.history.push('/games/letters')}>
        <Card name="Letters">
          <div className="card-thumbnail">
            <div className="letters a">a</div>
            <div className="letters b">b</div>
            <div className="letters c">c</div>
          </div>
        </Card>
      </div>
    )
  }
}

export default LettersCard;