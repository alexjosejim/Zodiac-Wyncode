import React from 'react'

class HoroscopeDisplay extends React.Component{

  state = {
    sunSign: {}
  }

  componentDidMount (){
    fetch(`/api/sign/${this.props.match.params.zodiac}`) //this is the request to express
      .then(res=>res.json())
      .then( data => this.setState({ sunSign: data[0] }) ) //this is the response from express
      .catch(error => console.log(error))
  }

  render(){
    console.log(this.props.testProp)
    return (
      <div>
        <div>
         <h1  class= "border" >{this.props.match.params.zodiac}</h1>
        </div>
        <section id="center">
          { this.state.sunSign.vibe }
          {
            this.state.sunSign.mental_traits &&
              this.state.sunSign.mental_traits.map( trait => {
                return(
                  <p>{trait}</p>
                )
              })
          }
        </section>
      </div>

    )
  }
}

export default HoroscopeDisplay
