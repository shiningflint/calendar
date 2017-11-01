import React from 'react'
import SliderPlugin from 'react-rangeslider'

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
        <SliderPlugin
          min={0}
          max={23}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}/>
        <div className="value">{value}</div>
      </div>
    )
  }
}

export default HorizontalSlider
