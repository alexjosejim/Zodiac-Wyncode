import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () =>{
    return (
          <footer>
          <p>Contact information: <a href="mailto:Vannessa.wilk@gmail.com">
            Vannessa.wilk@gmail.com</a>.</p>
          <ul>
            <li><a href="#" class="social twitter">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/vannessa-wilkinson-a5042b109/" target="_blank" class="social linkedin">LinkedIn</a></li>
            <li><a href="https://github.com/vwilkins1" target="_blank" class="social github">Github</a></li>
          </ul>
          </footer>
    )
  }


export default  Footer
