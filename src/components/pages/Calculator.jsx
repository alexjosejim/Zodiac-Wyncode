import React from 'react'
import {Link} from 'react-router-dom'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

class Calculator extends React.Component {

  state = {
    sign:''
  }

  handlePrint = (event) => {
    event.preventDefault()
    console.log("submitting");
    let month = event.target.month.value.toLowerCase()
    let day = Number( event.target.day.value )
    let sign = ''
    if (month === "december"){
      if (day < 22){
        sign = "Sagittarius";
      }
      else{
        sign ="Capricorn";
      }
    }
    else if(month === "january"){
      if (day < 20){
      sign = "Capricorn";
      }
      else{
        sign = "Aquarius";
      }
    }
    else if(month ==="february"){
      if (day < 19){
        sign = "Aquarius";
      }
      else{
        sign = "Pisces";
      }
    }
    else if(month === "march"){
      if (day < 21){
        sign = "Pisces";
      }
      else{
        sign = "Aries";
      }
    }
    else if(month === "april"){
      if (day < 20){
        sign = "Aries";
      }
      else{
        sign = "Taurus";
      }
    }
    else if(month === "may"){
      if (day < 21){
        sign = "Taurus";
      }
      else{
      sign = "Gemini";
      }
    }
    else if(month === "june"){
      if (day < 21){
        sign = "Gemini";
      }
      else{
        sign = "Cancer";
      }
    }
    else if(month === "july"){
      if (day < 23){
        sign = "Cancer";
      }
      else{
      sign = "Leo";
     }
    }
    else if(month === "august"){
      if (day < 23){
        sign = "Leo";
      }
      else{
        sign = "Virgo";
      }
    }
    else if(month === "september"){
      if (day < 23){
        sign = "Virgo";
      }
      else{
        sign = "Libra";
      }
    }
    else if(month === "october"){
      if (day < 23){
        sign = "Libra";
      }
      else{
        sign = "Scorpio";
      }
    }
    else if(month === "november"){
      if (day < 22){
        sign = "Scorpio";
      }
      else{
        sign = "Sagittarius";
      }
    }
    console.log(this.setState({ sign }));
  }

  goToSign = event => {
    this.props.history.push(`/zodiac`)

  }

  render(){
    return (
      <div>
        <form class="calculator"  onSubmit={this.handlePrint}>
          <span>When is Your Birthday?</span>
          <select  class="browser-default" name="month">
            <option value="">Month</option>
            {
              months.map( month => <option key={month} value={month}>{month}</option>)
            }
          </select>
          <select  class="browser-default" name="day">
            <option value="">Day</option>
            {
              days.map( day => <option key={day} value={day}>{day}</option>)
            }
          </select>
          <button id="submit" type="submit"> Submit </button>
          </form>
          <br/>
          {
            this.state.sign &&
            <div id="sign-result-button">
              <Link to={`/zodiac/${this.state.sign}`} onSubmit={this.goToSign}>{this.state.sign}</Link>
            </div>
          }
        </div>
    )
  }
}
export default Calculator
