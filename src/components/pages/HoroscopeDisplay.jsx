import React from 'react'
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
    <body>
      <div>
        <div class="border" >
           <h1>{this.props.match.params.zodiac}</h1>
           <h5>{ this.state.sunSign.vibe }</h5>
        </div>

				<div id="main">
					<div id="horoscope-display" class="container">
						<div class="row" cl>
							<div class="col-12 col-md-4">
								<section className="border">
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
							<div class="col-12 col-md-8 imp-medium">

								<section className="horoscope-content ">
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
                <section className="share">
                  <h2>Share your horoscope</h2>
                  <Share  />
                </section>

							</div>
						</div>
					</div>
				</div>
      </div>
    </body>

    )
  }
}







export default HoroscopeDisplay
