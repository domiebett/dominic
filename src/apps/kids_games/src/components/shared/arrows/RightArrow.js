import React from 'react';
import './Arrow.css';

class RightArrow extends React.Component {
    constructor(props) {
        super(props)

        this.props = props;
        
        this.moveToNext = this.moveToNext.bind(this);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.moveToNext);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.moveToNext)
    }

    moveToNext(event) {
        if (event.key === 'ArrowRight') {
            this.props.onClick(event)
        }
    }

    render() {
        return (
            <div className="Arrow RightArrow" onClick={this.props.onClick}>
                <i className="fa fa-2x fa-angle-right"></i>
            </div>
        );
    }
}

export default RightArrow;
