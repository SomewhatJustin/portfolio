import { useState } from 'react'
import ButtonLink from './ButtonLink'

import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Hi, my name is Justin</h1>
      <h2>I'm a frontend web developer.</h2>
      <div className='projects-container'>
        <h3>Selected projects</h3>
        <a href="https://mysmoothiestack.com"><h4>My Smoothie Stack</h4></a>
        <p>A way to share and discover your favorite smoothie recipes.</p>
        <a href="https://somewhatjustin.github.io/quizzical/"><h4>Quizzical</h4></a>
        <p>A fun quiz app powered by the Open Trivia API. Design assets from Scrimba.</p>
        <a href="https://somewhatjustin.github.io/tenzies/"><h4>Tenzies</h4></a>
        <p>A dice-rolling game. Design assets from Scimba.</p>
      </div>
      <ButtonLink>Find me on Github <i class="fa-brands fa-github"></i></ButtonLink>
    </div>
  )
}

export default App
