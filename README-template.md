# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./src/images/screenshot.png)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

I had never created a dropdown menu from scratch - I had always used libraries with prebuilt components. I was able to use React's useState to show to the drop down menu options once the mouse hovered over the Navbar item. 

Code I used to do this:
```js
  const [featureHover, setFeatureHover] = useState(false);
  const [companyHover, setCompanyHover] = useState(false);
----------------------------------------------------------
//setting hover states on mouse enter and mouse leave
     onMouseEnter={(e) => {
                setFeatureHover(true);
              }}
              onMouseLeave={(e) => {
                setFeatureHover(false);
              }}
----------------------------------------------------------
//showing up or down chevron depending on hover state
  {featureHover ? 'Features \u005E': 'Features \u2304 '}
  //displaying drop down items depending on hover state
              {featureHover ? (
                <div className="drop">
                  <li className="dropItem"><img src={todo}/> Todo List</li>
                  <li className="dropItem"><img src={calendar}/> Calendar</li>
                  <li className="dropItem"><img src={reminders}/> Reminders</li>
                  <li className="dropItem"><img src={planning}/> Planning</li>
                </div>
              ) : null}
```

### Continued development

I haven't done any mobile responsive styling on this project. My plan in the future is to go back through the CSS and add media queries where due.

## Author

- Website - [Sadie Southworth](https://sadiesouthworth.com)
- LinkedIn - (https://www.linkedin.com/in/sadiesouthworth/)