import React from 'react'
import './HoroscopeDisplay.css'
import Share from './Share'

const MENU_OPTIONS = ["famous_people", "favorites", "mental_traits", "physical_traits"]

class HoroscopeDisplay extends React.Component{

  state = {
    sunSign: {},
    menuSelected: "compatibility"
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
        <div class="border" >
           <h1>{this.props.match.params.zodiac}</h1>
           <small>{ this.state.sunSign.vibe }</small>
        </div>

				<div id="main">
					<div id="horoscope-display" class="container">
						<div class="row main-row">
							<div class="col-12 col-sm-4">
								<section>
									<h2>Options</h2>
									<ul>
									  {
                      MENU_OPTIONS.map( option => {
                        let styles = this.state.menuSelected === option ? { color: 'hotpink' } : { color: '#ffa' }
                        return(
                          <li
                            key={option}
                            className="text-capitalize"
                            style={ styles }
                            onClick={ ()=>{ this.setState({ menuSelected: option }) } }
                            >
                            { option.replace('_',' ') }
                          </li>
                        )
                      })
                    }
									</ul>
								</section>
							</div>
							<div class="col-12 col-sm-8 col-12-medium imp-medium">

								<section>
									<h2></h2>
                    {
                      this.state.sunSign[this.state.menuSelected] &&
                        this.state.sunSign[this.state.menuSelected].map( elem => {
                        let columns =  this.state.menuSelected === 'famous_people' ? { width: '33%', display: 'inline-block' } : {}

                        return(
                          <p style={columns}>{elem}</p>
                        )
                      })
                    }
								</section>
                <section>
                  <h2>Share your horoscope</h2>
                  <Share  />
                </section>

							</div>
						</div>
					</div>
				</div>


      </div>

    )
  }
}







export default HoroscopeDisplay
