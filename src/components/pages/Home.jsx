import React from "react";
let select = document.getElementById('characters')
let results
let htmlResults = document.getElementById('results')
// const Home = () => {
//   return <p>Zodiac Sing: <input id="userinput"></input></p>;
// };

class Home extends React.Component {
state = {
  zodiacData: null,
}

  // componentDidMount() {
  //   console.log('mounted')
  //   fetch('/api/zodiac')
  //     .then(response => response.json() )
  //     .then(data => {
  //       results = data.results
        // response.forEach(item => console.log(item.famous_people)

  //     }
  //
  //   ).catch(error => console.log(`error: `, error))
  // }

  render() {
    const {zodiacData} = this.state
    return (
      <h1>Sing</h1>
    )
  }
}

// response.forEach(item => console.log(item.famous_people) )

export default Home;
