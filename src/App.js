/* eslint-disable no-octal-escape */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import { BrowserRouter  as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">

    <header>

    <div className="header">

<a className="logoname"> Enea Hysa </a>
<a>Software Developer</a>

<div className="rightheader">

<a className="home" href="/">Home</a>
<a className="profile" href="/profile">Profile</a>
<a className="Portofolio" href="/portofolio">Portofolio</a>
<a className="Services" href="/services">Services</a>
<a className="Contact" href="/contact">Contact</a>

</div>

<div className="social-media">

<a href="https://www.facebook.com/eneahysa10"><img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt=""/></a>
<a href="https://www.instagram.com/enhs28"><img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt=""/></a>
<a href="https://accounts.snapchat.com/accounts/welcome"><img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt=" "/></a>
<a href="https://mail.google.com/mail/u/0/#inbox"><img src="https://img.icons8.com/offices/30/000000/gmail-login.png" alt=""/></a>
<a href="https://github.com/hysa99"><img src="https://img.icons8.com/cute-clipart/30/000000/github.png" alt=""/></a>

</div>
    </div>
    </header>

    <Switch>

<Route path="/">
    <div class="ba-slider">

    <img  src="" alt=""/> 
    
    </div>


    <h1>

    <div class="text-block">
    <h4>Hello, I am Enea Hysa</h4>
    <h3>I am a Software Engineering, Developer Video Editor! </h3>
    <h3>I LOVE TO TURN IDEAS OF PEOPLE TO REAL THINGS (DIGITAL)</h3>
    <button className="learn-more-button">Learn More</button>

    np
    
    </div>

    </h1>
  

<section className="section-about-me">
<h1>_______________________________________________</h1>
<h3 className="who-iam"> Who I am ? </h3>
<h1>_______________________________________________</h1>

<h1>I am a Software Engineer Student who is passionated to</h1> 
<h1>Create Stunning Websites, WebApp, Editing Videos  and ect.</h1>
<h1>Love to create stunning WebApp, Edit Videos using Adobe Premiere Pro,</h1> 
<h1>Love to design and create UI/UX for website and mobile with Adobe XD!</h1>

</section>

<section className="section-what-can-do">

<hr className="line1"/>

<h3 className="whatu-can-do">What I Do</h3>

<div className="wid">

<div><img src="https://img.icons8.com/dusk/124/000000/web.png" alt="Website Development" hspace="300"/><h3>Website Development</h3></div>
<div><img src="https://img.icons8.com/nolan/124/web-design.png" alt="Website Design" hspace="200"/><h3>Website Design</h3></div>
<div><img src="https://img.icons8.com/cute-clipart/118/000000/bottom-navigation-toolbar.png" alt="UI/UX Design" hspace="300"/><h3>UI/UX Design</h3></div>



</div>



</section>

<section>

<h3 className="myskills">My Skills</h3>

<p>HTML</p>
<div class="container">
  <div class="skills html">100%</div>
</div>

<p>CSS</p>
<div class="container">
  <div class="skills css">60%</div>
</div>

<p>JavaScript</p>
<div class="container">
  <div class="skills js">45%</div>
</div>

<p>React js</p>
<div class="container">
  <div class="skills php">70%</div>
</div>

<div className="lets-chat">

<h3>Ask Me Anything and lets work/collaborate together!!</h3>

</div>


</section>

</Route>

<Route path="/profile">

<h3>This is profile page </h3>

</Route>

</Switch>

<footer>

<div class="footer">

<p>Copyright © 1999-20 : Enea Hysa - Software Engineer | All rights Reserved.</p>

</div>

<div className="social media">

<a href="https://www.facebook.com/eneahysa10"><img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt=""/></a>
<a href="https://www.instagram.com/enhs28"><img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt=""/></a>
<a href="https://accounts.snapchat.com/accounts/welcome"><img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt=" "/></a>
<a href="https://mail.google.com/mail/u/0/#inbox"><img src="https://img.icons8.com/offices/30/000000/gmail-login.png" alt=""/></a>
<a href="https://github.com/hysa99"><img src="https://img.icons8.com/cute-clipart/30/000000/github.png" alt=""/></a>

</div>

    </footer>
    
    </div>
    
   </Router>
  );
}

export default App;
