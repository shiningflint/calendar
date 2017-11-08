import React from 'react';
import PropTypes from 'prop-types';
import SliderPlugin from 'react-rangeslider';

class HorizontalSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 10
    }
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }

  handleChangeStart() {
    return
  }

  handleChange(value) {
    this.setState({
      value: value
    })
  }

  handleChangeComplete() {
    return
  }

  render() {
    const { value } = this.state
    return(
      <div className="slider">
        <p className="slider-label">{this.props.label}</p>
        <div className="slider-wrapper">
          <SliderPlugin
            min={this.props.min}
            max={this.props.max}
            value={this.props.value}
            onChangeStart={this.handleChangeStart}
            onChange={this.props.change}
            onChangeComplete={this.handleChangeComplete}/>
        </div>
      </div>
    )
  }
}

HorizontalSlider.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.number,
  change: PropTypes.func,
  label: PropTypes.string,
}

export default HorizontalSlider;
