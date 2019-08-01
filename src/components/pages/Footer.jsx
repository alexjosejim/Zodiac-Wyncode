import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () =>{
    return (
          <footer sticky="bottom">
            <div class="container">
              <div class="row">
                <div class="col col-lg-11">
                <h2>Who are we?</h2></div>
                <div class="col col-lg-4">
                  <h4>Lulu De La Pena</h4>
                  <span>lulzdlp@aol.com</span>
                  <a href="#" className="ml-2"><i class="fab fa-2x fa-twitter-square"></i></a>
                  <a href="#" className="ml-2"><i class="fab fa-2x fa-linkedin"></i></a>
                  <a href="#" className="ml-2"><i class="fab fa-2x fa-github-alt"></i></a>
                </div>
                <div class="col col-lg-4">
                  <h4>Alex Jimenez</h4>
                  <span>alexjosejim@gmail.com</span>
                  <a href="https://twitter.com/AlexJoseJim" className="ml-2">
                    <i class="fab fa-2x fa-twitter-square"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/alexjosejim36a98b189/" className="ml-2">
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/alexjosejim" className="ml-2">
                    <i class="fab fa-2x fa-github-alt"></i>
                  </a>
                </div>
                <div class="col col-lg-4">
                  <h4>Vannessa Wilkinson</h4>
                  <span>Vannessa.wilk@gmail.com</span>
 									<a href="#" className="ml-2"><i class="fab fa-2x fa-twitter-square"></i></a>
                  <a href="#" className="ml-2"><i class="fab fa-2x fa-linkedin"></i></a>
                  <a href="#" className="ml-2"><i class="fab fa-2x fa-github-alt"></i></a>
                </div>
              </div>
              <div class="container">
                <div class="col-sm">
                  <div id="address">
                    <p class="lead my-0"><a class="text-info rajfont giant-text" href="tel:1-305-720-2422">[305] 720-2422</a></p>
                    <p class="text-uppercase text-white lead rajfont my-0">549 NW 28th St  |  miami, fl 33127</p>
                  </div>
                </div>
           </div>
           <hr></hr>
            <div class="container">
              <div class=".col-6 .col-md-4">
             <div id="copyright">
										© 2019 All rights reserved. | Design: <a href="#">Wyncode PT10</a>
									</div>
                </div>
              </div>
          </div>
        </footer>
    )
  }


export default  Footer
