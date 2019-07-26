import React from 'react'

class HoroscopeDisplay extends React.Component{
  render(){
    console.log(this.props.testProp)
    return (
      <div>
        Horoscope Display component
        <h1>{this.props.match.params.zodiac}</h1>
      </div>
    )
  }
}

export default HoroscopeDisplay
