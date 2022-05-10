import React, { useState } from "react";
import logo from "./images/logo.svg";
import mainPhoto from "./images/image-hero-desktop.png";
import dataImg from "./images/client-databiz.svg";
import audioImg from "./images/client-audiophile.svg";
import meetImg from "./images/client-meet.svg";
import makerImg from "./images/client-maker.svg";
import reminders from "./images/icon-reminders.svg";
import todo from "./images/icon-todo.svg";
import calendar from "./images/icon-calendar.svg";
import planning from "./images/icon-planning.svg";
import "./App.css";

function App() {
  const [featureHover, setFeatureHover] = useState(false);
  const [companyHover, setCompanyHover] = useState(false);

  return (
    <main className="App">
      <section className="mainDisplay">
        <img id="img" src={logo}></img>
        <section id="navDisplay">
          <ul className="nav">
            <ul
              className="navItem"
              onMouseEnter={(e) => {
                setFeatureHover(true);
              }}
              onMouseLeave={(e) => {
                setFeatureHover(false);
              }}
            >
              {featureHover ? 'Features \u005E': 'Features \u2304 '}
              {featureHover ? (
                <div className="drop">
                  <li className="dropItem"><img src={todo}/> Todo List</li>
                  <li className="dropItem"><img src={calendar}/> Calendar</li>
                  <li className="dropItem"><img src={reminders}/> Reminders</li>
                  <li className="dropItem"><img src={planning}/> Planning</li>
                </div>
              ) : null}
            </ul>
            <ul
              className="navItem"
              onMouseEnter={(e) => {
                setCompanyHover(true);
              }}
              onMouseLeave={(e) => {
                setCompanyHover(false);
              }}
            >
              {companyHover ? 'Company \u005E': 'Company \u2304 '}
              {companyHover ? (
                <div className="drop">
                  <li className="dropItem">History</li>
                  <li className="dropItem">Our Team</li>
                  <li className="dropItem">Blog</li>
                </div>
              ) : null}
            </ul>
            <li className="navItem">Careers</li>
            <li className="navItem">About</li>
          </ul>
           <ul id="actBtns">
            <li className="navItem">Login</li>
            <li className="navItem register">Register</li>
          </ul>
        </section> 
        <div id="contentGrid">
          <section id='leftGrid'>
            <h1 id='leftTitle'>Make<br></br> remote work</h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.{" "}
            </p>
            <button>Learn more</button>
            <div id='footerImg'>
              <img src={dataImg}></img>
              <img src={audioImg}></img>
              <img src={meetImg} ></img>
              <img src={makerImg} ></img>
            </div>
          </section>
          <div>
            <img src={mainPhoto} width="70%" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

//width='80%' height='80%'