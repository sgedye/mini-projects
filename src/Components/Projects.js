import React from 'react'
import styled from 'styled-components'
import '../styles/animate.css'
import Project from './Project'

import budget from '../imgs/budget.png'
import calculator from '../imgs/calculator.png'
import clock from '../imgs/clock.png'
import color from '../imgs/color.png'
import counter from '../imgs/counter.png'
import dragDrop from '../imgs/drag-n-drop.png'
import drumKit from '../imgs/drum-kit.png'
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
  const PROJECTS = [
    { id: 1, title: "Color Picker", img: `${color}`, alt: "Colour Picker", desc: "JavaScript, HTML, SCSS", address: "color-picker" },
    { id: 2, title: "Animal Selector", img: `${selector}`, alt: "jQuery Animal Selector", desc: "jQuery, HTML, Bootstrap, SCSS", address: "selector" },
    { id: 3, title: "Quote Machine", img: `${quotes}`, alt: "Quote Machine", desc: "ReactJS, HTML, SCSS", address: "quotes" },
    { id: 4, title: "Drum Machine", img: `${drumKit}`, alt: "Drum Machine", desc: "ReactJS, Styled Components, Hooks, HTML, CSS, MouseTrap", address: "drum-machine" },
    { id: 5, title: "React Calculator", img: `${calculator}`, alt: "React Calculator", desc: "ReactJS, Styled Components, HTML, SCSS, CSS, MouseTrap", address: "calculator" },
    { id: 6, title: "Weather App", img: `${weather}`, alt: "Weather App", desc: "APIs, JSON, JavaScript, HTML, CSS, Skycons", address: "weather" },
    { id: 7, title: "Budget App", img: `${budget}`, alt: "Budget Application", desc: "JavaScript, HTML, Bootstrap, CSS", address: "budget-app" },
    { id: 8, title: "Clock", img: `${clock}`, alt: "CSS & JS Clock", desc: "JavaScript, HTML, CSS", address: "clock" },
    { id: 9, title: "Slideshow", img: `${slideshow}`, alt: "Slideshow with Autoplay", desc: "JavaScript, HTML, CSS", address: "slideshow" },
    { id: 10, title: "React Counter", img: `${counter}`, alt: "React Counter", desc: "ReactJS, HTML, CSS", address: "counter" },
    { id: 11, title: "Drag 'n' Drop", img: `${dragDrop}`, alt: "Drag 'n' Drop", desc: "ReactJS, HTML, CSS", address: "drag-n-drop" },
    { id: 12, title: "SVG Writing", img: `${svgWriting}`, alt: "SVG Writing", desc: "HTML, CSS", address: "svg-writing" },
  ]
  const PROJECT_LIST = PROJECTS.map(project => {
    return (
      < Project key={project.id} title={project.title} img={project.img} alt={project.alt} desc={project.desc} address={project.address} />
    )
  })
  return (
    <StyledGrid>
      {PROJECT_LIST}
    </StyledGrid>
  )
}

export default Projects