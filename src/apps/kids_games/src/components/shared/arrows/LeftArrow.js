import React from 'react';
import './Arrow.css';

class LeftArrow extends React.Component {
    constructor(props) {
        super(props)

        this.props = props;

        this.moveToPrevious = this.moveToPrevious.bind(this);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.moveToPrevious);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.moveToPrevious)
    }

    moveToPrevious(event) {
        if (event.key === 'ArrowLeft') {
            this.props.onClick(event)
        }
    }

    render() {
        return (
            <div onClick={this.props.onClick} className="Arrow LeftArrow">
                <i className="fa fa-2x fa-angle-left"></i>
            </div>
        );
    }
}

export default LeftArrow;
