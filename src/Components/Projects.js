import React from 'react'
// import { useState, useEffect } from 'react'
import styled from 'styled-components'
import '../styles/animate.css'
import Project from './Project'
// import FilterButtons from './FilterButtons'

// Example projects:
import budget from '../imgs/budget.png'
import calculator from '../imgs/calculator.png'
import clock from '../imgs/clock.png'
import color from '../imgs/color.png'
import counter from '../imgs/counter.png'
import dragDrop from '../imgs/drag-n-drop.png'
import drumKit from '../imgs/drum-kit.png'
import fakeGoogle from '../imgs/fake-google.png'
import grandmas from '../imgs/grandmas.png'
import meme from '../imgs/meme-builder.png'
import quotes from '../imgs/quotes.png'
import selector from '../imgs/selector.png'
import slideshow from '../imgs/slideshow.png'
import svgWriting from '../imgs/svg-writing.png'
import weather from '../imgs/weather.png'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

function Projects() {

  // let [selection, setSelection] = useState("all")
  // const [refresh, setRefresh] = useState(false)

  const PROJECTS = [
    { id: 0, title: "Meme Builder", img: `${meme}`, alt: "Meme Builder", desc: "React, Styled Components, ReactIcons, API, HTML, CSS", onGitHub: true, address: "meme-builder" },
    { id: 1, title: "Color Picker", img: `${color}`, alt: "Colour Picker", desc: "JavaScript, HTML, SCSS", onGitHub: true, address: "color-picker" },
    { id: 2, title: "Animal Selector", img: `${selector}`, alt: "jQuery Animal Selector", desc: "jQuery, HTML, Bootstrap, SCSS", onGitHub: true, address: "selector" },
    { id: 3, title: "Drum Machine", img: `${drumKit}`, alt: "Drum Machine", desc: "React, Styled Components, Hooks, HTML, CSS, MouseTrap", onGitHub: true, address: "drum-machine" },
    { id: 4, title: "React Calculator", img: `${calculator}`, alt: "React Calculator", desc: "React, Styled Components, HTML, SCSS, CSS, MouseTrap", onGitHub: true, address: "calculator" },
    { id: 5, title: "Weather App", img: `${weather}`, alt: "Weather App", desc: "APIs, JSON, JavaScript, HTML, CSS, Skycons", onGitHub: true, address: "weather" },
    { id: 6, title: "Budget App", img: `${budget}`, alt: "Budget Application", desc: "JavaScript, HTML, Bootstrap, CSS", onGitHub: true, address: "budget-app" },
    { id: 7, title: "Fake Google", img: `${fakeGoogle}`, alt: "Fake Google", desc: "React, SCSS, Netlify, SVG, Sprites, HTML", onGitHub: false, address: ["fake-google", "https://fake-google.netlify.app/"] },
    { id: 8, title: "Clock", img: `${clock}`, alt: "CSS & JS Clock", desc: "JavaScript, HTML, CSS", onGitHub: true, address: "clock" },
    { id: 9, title: "Slideshow", img: `${slideshow}`, alt: "Slideshow with Autoplay", desc: "JavaScript, HTML, CSS", onGitHub: true, address: "slideshow" },
    { id: 10, title: "React Counter", img: `${counter}`, alt: "React Counter", desc: "React, HTML, CSS", onGitHub: true, address: "counter" },
    { id: 11, title: "Drag 'n' Drop", img: `${dragDrop}`, alt: "Drag 'n' Drop", desc: "React, HTML, CSS", onGitHub: true, address: "drag-n-drop" },
    { id: 12, title: "Quote Machine", img: `${quotes}`, alt: "Quote Machine", desc: "React, HTML, SCSS", onGitHub: true, address: "quotes" },
    { id: 13, title: "SVG Writing", img: `${svgWriting}`, alt: "SVG Writing", desc: "HTML, CSS", onGitHub: true, address: "svg-writing" },
    { id: 14, title: "Grandmas Sweets", img: `${grandmas}`, alt: "Grandmas Sweets", desc: "HTML, CSS, JavaScript", onGitHub: true, address: "grandmas-sweets" },
  ]
  
  // useEffect(() => {
  //   setSelection("react")
  // }, [selection])

  // function changeSelection(e) {
  //   e.preventDefault()
  //   console.log(e.target.value)
  //   console.log('hi')
  //   console.log(selection)
  //   setSelection('javascript')
  // }
  return (
    <>
      {/* <button onClick={(e) => changeSelection(e)}>hi</button>
      <FilterButtons /> */}
      <StyledGrid>
        {
          PROJECTS
            // .filter(project => project.desc.toLowerCase().split(', ').includes(selection) || selection === 'all')
            .map(project => <Project key={project.id} title={project.title} img={project.img} alt={project.alt} desc={project.desc} onGitHub={project.onGitHub} address={project.address} />)
        }
      </StyledGrid>
    </>
  )
}

export default Projects