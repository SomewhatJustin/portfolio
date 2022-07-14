import { useState } from 'react'
import ButtonLink from './ButtonLink/ButtonLink.jsx'
import FunContainer from './FunContainer/FunContainer.jsx'
import Techbox from './Techbox/Techbox.jsx'

import './App.css'

function App() {

  const goodGradients = ["linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)", "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)", "linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%)", "linear-gradient(90deg, #fcff9e 0%, #c67700 100%)", "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)"]

  return (
    <div className="App">
      <h1>Hi, my name is Justin</h1>
      <h2>I'm a frontend web developer.</h2>
      <ButtonLink icon="github" text="Find me on Github" link={"https://github.com/somewhatjustin"} />
      <ButtonLink icon="linkedin" text="See my professional experience" link={"https://www.linkedin.com/in/sjustinfowler"} />
      <FunContainer>
        <h2>Selected projects</h2>
        <a href="https://mysmoothiestack.com"><h4>My Smoothie Stack</h4></a>
        <p>A way to share and discover your favorite smoothie recipes.</p>
        <a href="https://somewhatjustin.github.io/quizzical/"><h4>Quizzical</h4></a>
        <p>A fun quiz app powered by the Open Trivia API. Design assets from Scrimba.</p>
        <a href="https://somewhatjustin.github.io/tenzies/"><h4>Tenzies</h4></a>
        <p>A dice-rolling game. Design assets from Scimba.</p>
      </FunContainer>
      <FunContainer>
        <h2>Technologies</h2>
        <Techbox gradient={goodGradients[0]} icon="react" name="React" />
        <Techbox gradient={goodGradients[1]} icon="js" name="Javascript" />
        <Techbox gradient={goodGradients[2]} icon="html" name="HTML" />
        <Techbox gradient={goodGradients[3]} icon="css" name="CSS" />
      </FunContainer>
    </div>
  )
}

export default App
