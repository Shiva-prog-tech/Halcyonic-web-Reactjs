import React from "react";
// import Banner from './banner.jpg'
import "./home.styles.scss";
import { Link } from "react-router-dom";
// import Banner from "../../assets/banner.jpg";
import pic01 from "../../assets/pic01.jpg";
import pic02 from "../../assets/pic02.jpg";
import pic03 from "../../assets/pic03.jpg";
import pic04 from "../../assets/pic04.jpg";
import pic05 from "../../assets/pic05.jpg";
import pic06 from "../../assets/pic06.jpg";
import pic07 from "../../assets/pic07.jpg";
import pic08 from "../../assets/pic08.jpg";
import iconcheckmark from "../../assets/iconcheckmark.png";
import Left from "../banner/left/left.component";
import Right from "../banner/right/right.component";

const Home = () => {
  return (
    <>
      <div class="banner">
      <Left/>
      <Right/>
      {/* <div class="left">
          <p>
            We do something really useful, important, and unique. Learn all
            about it here ...
          </p>
          <button>Go on, click me!</button>
        </div> */}
        {/* <div class="right">
          <img src={Banner} alt="#" />
        </div> */}
        
      </div>
      <div class="div-4">
        <div class="div-0">
          <div class="a1">
            <div class="i">
              <img src={pic01} alt="" />
            </div>
            <h4>Welcome to Halcyonic</h4>
            <p>
              This is <b>Halcyonic,</b>a free site template by{" "}
              <Link to="#">AJ</Link> for <Link to="https://html5up.net/halcyonic"> HTML5 UP.</Link>
              It's responsive, built on HTML5 + CSS3, and includes 5 unique page
              layouts.
            </p>
          </div>
          <div class="a1">
            <div class="i">
              <img src={pic02} alt="" />
            </div>
            <h4>Welcome to Halcyonic</h4>
            <p>
              This is <b>Halcyonic,</b>a free site template by{" "}
              <Link to="#">AJ</Link> for <Link to="https://html5up.net/halcyonic"> HTML5 UP.</Link>
              It's responsive, built on HTML5 + CSS3, and includes 5 unique page
              layouts.
            </p>
          </div>
          <div class="a1">
            <div class="i">
              <img src={pic03} alt="" />
            </div>
            <h4>Welcome to Halcyonic</h4>
            <p>
              This is <b>Halcyonic,</b>a free site template by{" "}
              <Link to="#">AJ</Link> for <Link to="https://html5up.net/halcyonic"> HTML5 UP.</Link>
              It's responsive, built on HTML5 + CSS3, and includes 5 unique page
              layouts.
            </p>
          </div>
          <div class="a1">
            <div class="i">
              <img src={pic04} alt="" />
            </div>
            <h4>Welcome to Halcyonic</h4>
            <p>
              This is <b>Halcyonic,</b>a free site template by{" "}
              <Link to="#">AJ</Link> for <Link to="https://html5up.net/halcyonic"> HTML5 UP.</Link>
              It's responsive, built on HTML5 + CSS3, and includes 5 unique page
              layouts.
            </p>
          </div>
        </div>
      </div>
      <section class="cards">
        <div class="card">
            <h2>Who We Are</h2>
            <h3>A subheading about who we are</h3>
            <img src={pic05} alt=""/>
            <p>Duis neque nisi, dapibus sed mattis quis, rutrum accumsan magna sed. Suspendisse eu varius nibh. Suspendisse vitae magna eget odio amet mollis justo facilisis quis. Sed sagittis amet lorem ipsum.</p>

            
            
        </div>
        <div class="card">
            <h2>Who We Are</h2>
            <h3>A subheading about who we are</h3>
            <ul>
                
                <li><img src={iconcheckmark} alt=""/>Sed mattis quis rutrum accum</li><hr/>
                <li><img src={iconcheckmark} alt=""/>Sed mattis quis rutrum accum</li><hr/>
                <li><img src={iconcheckmark} alt=""/>Sed mattis quis rutrum accum</li><hr/>
                <li><img src={iconcheckmark} alt=""/>Sed mattis quis rutrum accum</li><hr/>
                <li><img src={iconcheckmark} alt=""/>Sed mattis quis rutrum accum</li>
            </ul>
            
        </div>
        <div class="card">
            <h2>What People Are Saying  </h2>
            <h3>And a final subheading about our clients</h3>
            
            <div class="pic-1">
                <img src={pic06} alt=""/>
                <div class="name">
                    <p><i>"Neque nisidapibus mattis"</i></p>
                    <span><b>Jane Doe, CEO of UntitledCorp</b></span>
                </div>
            </div>
            <hr/>
            <div class="pic-1">
                <img src={pic07} alt=""/>
                <div class="name">
                    <p><i>"Neque nisidapibus mattis"</i></p>
                    <span><b>Jane Doe, CEO of UntitledCorp</b></span>
                </div>
            </div>
            <hr/>
            <div class="pic-1">
                <img src={pic08} alt=""/>
                <div class="name">
                    <p><i>"Neque nisidapibus mattis"</i></p>
                    <span><b>Jane Doe, CEO of UntitledCorp</b></span>
                </div>

            </div>
            
        </div>

    </section>
    <footer>
        <div class="cont">
            <div class="left1">
                <h2>Links to Important Stuff</h2>
                <div class="cont1">
                    <div class="c1">
                        <ul>
                            <li>Neque amet dapibus</li>
                            <hr/>
                            <li>Sed mattis quis rutrum</li>
                            <hr/>
                            <li>Accumsan suspendisse</li>
                            <hr/>
                            <li>Eu varius vitae magna</li>
                        </ul>
                    </div>
                    <div class="c1">
                        <ul>
                            <li>Neque amet dapibus</li>
                            <hr/>
                            <li>Sed mattis quis rutrum</li>
                            <hr/>
                            <li>Accumsan suspendisse</li>
                            <hr/>
                            <li>Eu varius vitae magna</li>
                        </ul>
                    </div>
                    <div class="c1">
                        <ul>
                            <li>Neque amet dapibus</li>
                            <hr/>
                            <li>Sed mattis quis rutrum</li>
                            <hr/>
                            <li>Accumsan suspendisse</li>
                            <hr/>
                            <li>Eu varius vitae magna</li>
                        </ul>
                    </div>
                    <div class="c1">
                        <ul>
                            <li>Neque amet dapibus</li>
                            <hr/>
                            <li>Sed mattis quis rutrum</li>
                            <hr/>
                            <li>Accumsan suspendisse</li>
                            <hr/>
                            <li>Eu varius vitae magna</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="right1">
                <h2>An Informative Text Blurb</h2>
                <p>Duis neque nisi, dapibus sed mattis quis, rutrum accumsan sed. Suspendisse eu varius nibh. Suspendisse vitae magna eget odio amet mollis. Duis neque nisi, dapibus sed mattis quis, sed rutrum accumsan sed. Suspendisse eu varius nibh lorem ipsum amet dolor sit amet lorem ipsum consequat gravida justo mollis.</p>
            </div>
        </div>
    </footer>
    <div class="di">
        <hr/>
      <p class="foot">© Untitled. All rights reserved. | Design: <span>HTML5 UP</span> | Demo Images: <span>Unsplash</span> </p>

    </div>
    </>
  );
};

export default Home;
