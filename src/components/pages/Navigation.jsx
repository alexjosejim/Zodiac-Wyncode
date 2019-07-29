import React from 'react'
import {Link} from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]

const Navigation= () =>{
    return (
        <nav className="nav" sticky="top">
          <div>
            <Link  to='/' id="submit">Home</Link>
             {
                signs.map(sign => <li><Link to={`/zodiac/${sign}`}>{sign}</Link></li>)
              }
          </div>
        </nav>
    )
  }


export default Navigation
