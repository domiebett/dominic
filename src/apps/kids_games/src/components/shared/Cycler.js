import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.carouselItems = this.props.carouselItems;

    this.state = {
      activeIndex: 0,
    }
  }

  goToNext(e) {
    e.preventDefault()

    let index = this.state.activeIndex;
    if (index >= (this.carouselItems.length - 1)) {
      index = 0;
    } else {
      index++
    }

    this.setState({
      activeIndex: index
    })
  }

  goToPrevious(e) {
    e.preventDefault()

    let index = this.state.activeIndex;
    if (index < 1) {
      index = this.carouselItems.length - 1;
    } else {
      index--;
    }

    this.setState({
      activeIndex: index
    })
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyboardClicks)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyboardClicks)
  }

  handleKeyboardClicks(event) {
    if (event.key === 'ArrowRight') {
      this.goToNext(event)
    } else if (event.key === 'ArrowLeft') {
      this.goToPrevious(event)
    }
  }

  render() {
    return (
      <div className="Carousel">
        {this.props.children}
      </div>
    )
  }
}

export default Carousel;
